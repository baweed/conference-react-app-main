import { ChangeEvent, FC, useRef } from 'react';
import { HeaderThemes } from '../../types/headerThemes.ts';
import { Transition } from 'react-transition-group';
import MobileMenu from '../MobileMenu/MobileMenu.tsx';
import { useTranslation } from 'react-i18next';

const Header: FC<{headerTheme: HeaderThemes}> = ({headerTheme}) => {
  let classNames = '';
  const ref = useRef<HTMLElement>(null);
  const {t} = useTranslation();

  switch (headerTheme) {
  case HeaderThemes.transparent:
    classNames = 'text-gray-900 transition-colors absolute inset-x-0 top-0 z-50 drop-shadow-xl';
    break;
  case HeaderThemes.light:
    classNames = 'text-gray-900 transition-colors fixed bg-white inset-x-0 top-0 z-50 drop-shadow-xl';
    break;
  case HeaderThemes.dark:
    classNames = 'text-white bg-green-700 transition-colors fixed inset-x-0 top-0 z-50 drop-shadow-xl';
    break;
  }

  const duration = 300;
  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: {opacity: 1}
  };

  const {i18n} = useTranslation();

  return (
    <Transition
      timeout={duration}
      in={true}
      appear={true}
      mountOnEnter={true}
      nodeRef={ref}>
      {state => (
        <header id="header"
          className={classNames}
          style={{...defaultStyle, ...transitionStyles[state]}}>
          <nav
            className="flex items-center px-6 py-3 lg:px-8 gap-x-7"
            aria-label="Global">
            <div className="max-w-[100px] xs:max-w-[50px]">
              <a
                href="https://sfedu.ru/"
                target={'_blank'}
                rel={'noreferrer noopener'}
                className="-m-1.5 p-1.5 block">
                <span className="sr-only">SFEDU</span>
                <img className="" src="/sfedu.webp" alt="SFEDU"/>
              </a>
            </div>
            <div
              className="lg:flex-1 hidden lg:flex lg:gap-x-12 justify-center text-inherit">
              <a href="#digest"
                className="text-base font-semibold leading-6 ">
                {t('header.digest')}
              </a>
              <a href="#info"
                className="text-base font-semibold leading-6 ">
                {t('header.program')}
              </a>
              <a href="#members-organising" className="text-base font-semibold leading-6 ">
                {t('header.organizationalCommittee')}
              </a>
              <a href="#members-international" className="text-base font-semibold leading-6 ">
                {t('header.internationalCommittee')}
              </a>

              <a href="#registration-form" className="text-base font-semibold leading-6">
                {t('header.articleRules')}
              </a>

              <a href="#contacts"
                className="text-base font-semibold leading-6 ">
                {t('header.contacts')}
              </a>
            </div>
            <select
              value={i18n.language}
              className={'ml-auto bg-transparent rounded-md font-bold'}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                i18n.changeLanguage(e.currentTarget.value);
              }}
            >
              <option
                value={'ru-RU'}
                className={'text-black'}
              >
                RU
              </option>
              <option
                value={'en-US'}
                className={'text-black'}
              >
                EN
              </option>
            </select>

            <div className="hidden lg:block">
              <a href="#registration-form" className="text-sm font-semibold leading-6">
                {t('header.registrationForm')}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <div className="flex lg:hidden">
              <MobileMenu/>
            </div>
          </nav>
        </header>
      )}
    </Transition>

  );
};

export default Header;