import { Dispatch, FC, memo, SetStateAction } from 'react';
import RegistrationForm from './RegistrationForm.tsx';
import { useHeaderTheme } from '../../hooks/useHeaderTheme.ts';
import { HeaderThemes } from '../../types/headerThemes.ts';
import { useTranslation } from 'react-i18next';

const FormSection: FC<{
  setHeaderTheme: Dispatch<SetStateAction<HeaderThemes>>
}> = memo(({setHeaderTheme}) => {
  const themeRef = useHeaderTheme(HeaderThemes.light, setHeaderTheme);
  const {t} = useTranslation();

  return (
    <section
      id={'registration-form'}
      ref={themeRef}
      className="isolate sm:w-[72.1875rem] px-6 py-24 sm:py-32 lg:px-8 container mx-auto">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true">
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase"
        >
          {t('registrationForm.heading')}
        </h2>
        <p className="mt-2 text-base leading-8 text-gray-600">
          {t('registrationForm.description')}
        </p>
        <div className="mt-4">
          <a href="/pdf/Правила-оформления-статей.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="text-indigo-600 hover:text-indigo-500 font-semibold underline text-xl">
            {t('registrationForm.rulesAppendix')}
          </a>
        </div>
      </div>
      <RegistrationForm/>
    </section>
  );
});

export default FormSection;