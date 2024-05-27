import { Dispatch, SetStateAction } from 'react';
import { HeaderThemes } from '../../types/headerThemes.ts';
import { useHeaderTheme } from '../../hooks/useHeaderTheme.ts';
import { useTranslation } from 'react-i18next';

const ContactsSection = ({setHeaderTheme}: {
  setHeaderTheme: Dispatch<SetStateAction<HeaderThemes>>
}) => {
  const themeRef = useHeaderTheme(HeaderThemes.dark, setHeaderTheme);

  const {t} = useTranslation();

  return (
    <footer id={'contacts'} ref={themeRef}
      className={'grid sm:grid-flow-col col-auto grid-flow-row justify-stretch justify-items-center pr-3 pl-3'}>
      <img className={'w-[150px]'} src="/sfedu.webp"
        alt="Southern Federal University"/>
      {/* <img className={'w-[200px]'} src="/conference.webp" alt="Conference"/> */}
      <img className={'w-[150px]'} src="/soil-health.webp" alt="Soil health"/>
      <img className={'w-[150px]'} src="/science-and-universities.webp" alt="Science and universities"/>
      <div className={'w-full justify-self-stretch text-center'}>
        <address className={'not-italic w-full text-center'}>
          {t('contactsSection.address')}
        </address>
        <p><a className={'text-indigo-600'} href="mailto:soil.health.conf@mail.ru">soil.health.conf@mail.ru</a></p>
        <p>Тел.: +7-988-830-55-30</p>
        {/* <p><a className={'text-indigo-600'} href="mailto:snsushkova@sfedu.ru">snsushkova@sfedu.ru</a></p> */}
      </div>
      <div className={'w-full justify-self-stretch text-center'}>
        <p>
          {t('contactsSection.info')}
        </p>
        <p><a className={'text-indigo-600'} href="https://soilhealth.sfedu.ru/">https://soilhealth.sfedu.ru/</a></p>
      </div>
    </footer>
  );
};

export default ContactsSection;