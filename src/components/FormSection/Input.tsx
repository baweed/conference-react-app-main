import { FC, PropsWithChildren } from 'react';
import { Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { IRegistrationInput } from './IRegistrationInput.ts';

interface IInputProps extends PropsWithChildren {
  label: string;
  register: UseFormRegister<IRegistrationInput>;
  errorMessage?: string;
  autoComplete?: string;
  options: RegisterOptions;
  id: Path<IRegistrationInput>;
  select?: boolean;
}

const errorClasses = ' focus:ring-red-600 focus:ring-2 ring-2 ring-red-600';
const normalClasses = ' focus:ring-indigo-600 focus:ring-2 focus:ring-inset';
const inputClasses = 'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6';

const Input: FC<IInputProps> = ({
  label,
  id,
  autoComplete,
  errorMessage,
  register,
  select,
  options,
  children,
}) => {
  return (
    <>
      <label htmlFor={id}
        className="block text-sm font-semibold leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2.5">
        {select ?
          <select id={id}
            defaultValue={''}
            className={inputClasses + (errorMessage ? errorClasses : normalClasses)}
            {...register(id, options)}>
            {children}
          </select>
          :
          <input
            type="text"
            id={id}
            autoComplete={autoComplete}
            className={inputClasses + (errorMessage ? ' focus:ring-red-600 focus:ring-2 ring-2 ring-red-600' : ' focus:ring-indigo-600 focus:ring-2 focus:ring-inset')}
            {...register(id, options)}/>}
        <p
          className={'text-5 text-red-700 h-5'}>
          {errorMessage}
        </p>
      </div>
    </>
  );
};

export default Input;