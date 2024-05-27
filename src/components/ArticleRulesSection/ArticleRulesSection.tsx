import { useHeaderTheme } from '../../hooks/useHeaderTheme.ts';
import { HeaderThemes } from '../../types/headerThemes.ts';
import { Dispatch, FC, memo, SetStateAction } from 'react';
import { Trans, useTranslation } from 'react-i18next';

const ArticleRulesSection: FC<{
  setHeaderTheme: Dispatch<SetStateAction<HeaderThemes>>
}> = memo(({setHeaderTheme}) => {
  const themeRef = useHeaderTheme(HeaderThemes.dark, setHeaderTheme);
  const {t} = useTranslation();

  return (
    <section id={'article-rules'} ref={themeRef} className="bg-green-700 scroll-mt-48 xs:scroll-mt-20">
      <div className="container mx-auto text-white xs:m-w-[300px] px-6 mb-10">
        <div className="p-10 list-decimal leading-7">
          <p className="pb-2.5">
            {t('articleRulesSection.p1')}
          </p>
          <p className="pb-2.5">
            {t('articleRulesSection.p2')}
          </p>
          <p className="pb-2.5">
            <Trans
              i18nKey={'articleRulesSection.p3'}
              components={{
                a: <a
                  href="/pdf/Список-гостиниц.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-indigo-300"/>
              }}
            />
          </p>

        </div>
      </div>
    </section>
  );
});

export default ArticleRulesSection;