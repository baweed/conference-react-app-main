import {
  Dispatch,
  type MouseEvent,
  type ReactElement,
  SetStateAction,
  useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  changeState: Dispatch<SetStateAction<boolean>>
}

const liClassNames = 'font-light text-2xl uppercase p-5 block text-center';

const MobileMenuNav = ({changeState}: Props): ReactElement => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const {t} = useTranslation();

  const handleClick = () => {
    changeState(false);
  };

  return (
    <div
      className={'fixed top-0 left-0 w-[100%] h-[100vh] bg-black/60 z-50 lg:hidden back'}
      onClick={(e: MouseEvent<HTMLDivElement>) => {
        if (!(e.target instanceof HTMLDivElement)) return;

        if (e.target.classList.contains('back')) {
          changeState(false);
        }
      }}>
      <nav className={'bg-white w-8/12 h-[100%]'}>
        <ul className={'h-[100%] flex flex-col items-center'}>
          <li>
            <a href="#digest" onClick={handleClick} className={liClassNames}>
              {t('header.digest')}
            </a>
          </li>
          <li>
            <a href="#info" onClick={handleClick} className={liClassNames}>
              {t('header.program')}
            </a>
          </li>
          <li>
            <a href="#members-organising" onClick={handleClick} className={liClassNames}>
              {t('header.organizationalCommittee')}
            </a>
          </li>
          <li>
            <a href="#members-international" onClick={handleClick} className={liClassNames}>
              {t('header.internationalCommittee')}
            </a>
          </li>
          <li>
            <a href="#article-rules" onClick={handleClick} className={liClassNames}>
              {t('header.articleRules')}
            </a>
          </li>
          <li>
            <a href="#contacts" onClick={handleClick} className={liClassNames}>
              {t('header.contacts')}
            </a>
          </li>
          <li>
            <a href="#registration-form" onClick={handleClick} className={liClassNames}>
              {t('header.registrationForm')}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenuNav;