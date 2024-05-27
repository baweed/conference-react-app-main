import { Dispatch, FC, memo, SetStateAction } from 'react';
import { HeaderThemes } from '../../types/headerThemes.ts';
import { useHeaderTheme } from '../../hooks/useHeaderTheme.ts';
import { Trans, useTranslation } from 'react-i18next';

const InfoSection: FC<{
  setHeaderTheme: Dispatch<SetStateAction<HeaderThemes>>
}> = memo(({setHeaderTheme}) => {
  const themeRef = useHeaderTheme(HeaderThemes.dark, setHeaderTheme);
  const {t} = useTranslation();

  return (
    <section id={'info'} ref={themeRef} className="info-section scroll-mt-5 bg-green-700 pb-10">
      <div
        className="container mx-auto text-white xs:m-w-[300px] px-6 mb-10 relative z-20 text-lg">
        <h1 className="font-bold uppercase text-3xl pt-20">
          {t('infoSection.themesHeading')}
        </h1>
        <ol className="p-10 list-decimal leading-10">
          <li>
            {t('infoSection.themeList.theme1')}
          </li>
          <li>
            {t('infoSection.themeList.theme2')}
          </li>
          <li>
            {t('infoSection.themeList.theme3')}
          </li>
          <li>
            {t('infoSection.themeList.theme4')}
          </li>
        </ol>
        <p className="font-bold text-[34px] flex content-center justify-center">
          {t('infoSection.spendingTime')}
        </p>
        <h1 className="font-bold uppercase text-3xl pt-10">
          {t('infoSection.programHeading')}
        </h1>
        <div className="p-10 leading-7">
          <p>
            <Trans
              i18nKey={'infoSection.program.item1'}
              components={{
                span: <span className="font-bold text-[20px]"/>,
              }}
            />
          </p>
          <p>
            <Trans
              i18nKey={'infoSection.program.item2'}
              components={{
                span: <span className="font-bold text-[20px]"/>,
              }}
            />
          </p>
          <p>
            <Trans
              i18nKey={'infoSection.program.item3'}
              components={{
                span: <span className="font-bold text-[20px]"/>,
              }}
            />
          </p>
          {/* <p>
            <Trans
              i18nKey={'infoSection.program.item4'}
              components={{
                span: <span className="font-bold text-[20px]"/>,
              }}
            />
          </p>
          <p>
            <Trans
              i18nKey={'infoSection.program.item5'}
              components={{
                span: <span className="font-bold text-[20px]"/>,
              }}
            />
          </p>
          <p>
            <Trans
              i18nKey={'infoSection.program.item6'}
              components={{
                span: <span className="font-bold text-[20px]"/>,
              }}
            />
          </p> */}
        </div>
        <p className="pb-5">
          <Trans
            i18nKey={'infoSection.place'}
            components={{
              span: <span className="font-bold text-[20px] uppercase"/>,
            }}
          />
        </p>
        <p className="pb-5">
          <Trans
            i18nKey={'infoSection.language'}
            components={{
              span: <span className="font-bold text-[20px] uppercase"/>,
            }}
          />
        </p>
        <p className="pb-5">
          <Trans
            i18nKey={'infoSection.participationForms'}
            components={{
              span: <span className="font-bold text-[20px] uppercase"/>,
            }}
          />
        </p>
        {/* <p className="font-bold text-[24px] pb-2.5 uppercase">{t('infoSection.deadlineHeading')}</p>
        <p className="leading-7">
          <Trans
            i18nKey={'infoSection.deadlines.date1'}
            components={{
              span: <span className="font-bold text-[20px]"/>,
            }}
          />
        </p>
        <p className="leading-7">
          <Trans
            i18nKey={'infoSection.deadlines.date2'}
            components={{
              span: <span className="font-bold text-[20px]"/>,
            }}
          />
        </p> */}
        <p className="leading-7 mt-4">
          <a
            href="#"
            rel={'noreferrer noopener'}
            id={'digest'}
            className={'scroll-mt-48 text-indigo-300 font-semibold text-2xl'}
            target={'_blank'}
          >
            {t('infoSection.digest')}
          </a>
        </p>
        <p className="leading-7 mt-4">
          <a
            href="#"
            rel={'noreferrer noopener'}
            className={'scroll-mt-48 text-indigo-300 font-semibold text-2xl'}
            target={'_blank'}
          >
            Программа конференции
          </a>
        </p>
        <p className="leading-7 mt-4">
          <a
            href="#"
            rel={'noreferrer noopener'}
            className={'scroll-mt-48 text-indigo-300 font-semibold text-2xl'}
            target={'_blank'}
          >
            Conference program
          </a>
        </p>

      </div>
    </section>
  );
});

export default InfoSection;