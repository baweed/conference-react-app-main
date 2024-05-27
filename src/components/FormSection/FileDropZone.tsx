import {
  FC,
  PropsWithChildren,
  type DragEvent,
  useState,
  useEffect,
} from 'react';
import { IRegistrationInput } from './IRegistrationInput.ts';
import {
  Path,
  RegisterOptions,
  UseFormRegister,
  UseFormSetValue, UseFormWatch,
} from 'react-hook-form';
import { Trans } from 'react-i18next';

interface IFileDropProps extends PropsWithChildren {
  register: UseFormRegister<IRegistrationInput>;
  errorMessage?: string;
  options?: RegisterOptions;
  id: Path<IRegistrationInput>;
  select?: boolean;
  setValue: UseFormSetValue<IRegistrationInput>;
  watch: UseFormWatch<IRegistrationInput>;
}

const FileList = ({files}: { files: File[] }) => {
  return (
    <ul className={'grid grid-flow-col grid-rows-4 gap-1 justify-items-stretch'}>
      {files.map((file, i) => (
        <li
          key={i}
          className={'p-2 font-semibold border-gray-950 rounded-md border'}
        >
          {file.name.length > 14 ? `${file.name.substr(0, 14)}...` : file.name}
        </li>
      ))}
    </ul>
  );
};

const FileDropZoneInner = () => {
  return (
    <>
      <svg className="w-10 h-10 mb-3 text-gray-400" fill="none"
        stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round"
          strokeWidth="2"
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
      </svg>
      <p className="mb-2 text-sm text-gray-500 text-center">
        <Trans
          i18nKey={'registrationForm.dropZoneLabel'}
          components={{
            span: <span className="font-semibold"/>,
          }}/>
      </p>
    </>
  );
};

const FileDropZone: FC<IFileDropProps> = ({
  children,
  errorMessage,
  register,
  options,
  setValue,
  watch
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const watchField = watch('files');

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setValue('files', e.dataTransfer.files);
    setFiles([...e.dataTransfer.files]);
    // console.log(e.dataTransfer.files);
  };

  useEffect(() => {
    if (watchField) {
      setFiles([...watchField]);
    } else {
      setFiles([]);
    }
  }, [watchField]);

  return (
    <>
      <div className="flex items-center justify-center w-full col-span-2 ">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-200"
          onDragOver={(e: DragEvent<HTMLLabelElement>) => {
            e.preventDefault();
          }}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {files.length ? <FileList files={files}/> : <FileDropZoneInner/>}
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            multiple={true}
            {...register('files', options)}
          />
        </label>
      </div>
      <div className="col-span-2 text-5 text-red-700 h-5">{errorMessage}</div>
      <div
        className="col-span-2 block text-sm font-semibold leading-6 text-gray-900">
        {children}
      </div>
    </>
  );
};

export default FileDropZone;