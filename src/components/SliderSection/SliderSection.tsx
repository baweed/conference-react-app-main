import TourSlider from '../TourSlider/TourSlider.tsx';
import {Dispatch, memo, SetStateAction} from 'react';
import {useHeaderTheme} from '../../hooks/useHeaderTheme.ts';
import {HeaderThemes} from '../../types/headerThemes.ts';
import {useTranslation} from "react-i18next";

type Props = {
    setHeaderTheme: Dispatch<SetStateAction<HeaderThemes>>
}

const SliderSection = memo(({setHeaderTheme}: Props) => {
    const themeRef = useHeaderTheme(HeaderThemes.dark, setHeaderTheme);
    const {t} = useTranslation();

    return (
        <section ref={themeRef} className={'bg-green-700'}>
            <div className="container mx-auto text-white xs:m-w-[300px] px-6 mb-10">
                <p className="leading-7 pt-4 mb-10">
                    <a
                        href="/pdf/Агротуризм%20Био-Хутор.pdf"
                        rel={'noreferrer noopener'}
                        className={'scroll-mt-48 text-indigo-300 font-semibold text-2xl'}
                        target={'_blank'}
                    >
                        {t('sliderSection.heading')}
                    </a>
                </p>
                {/*<p className={'text-xl pb-10 pt-3'}>*/}
                {/*    <Trans*/}
                {/*        i18nKey={'sliderSection.info'}*/}
                {/*        components={{*/}
                {/*            span: <span className={'text-blue-400 font-bold'}/>,*/}
                {/*            date: <b/>*/}
                {/*        }}/>*/}
                {/*</p>*/}
                <TourSlider/>
                <div className="flex items-center justify-center gap-x-6">
                    <div className="mt-1 flex items-center justify-center gap-x-6">
                      <a href="https://disk.yandex.ru/d/8eezCLIQtcc1_g"
                        className="mb-10 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        1-2 день
                      </a>
                    </div>
                    <div className="mt-1 flex items-center justify-center gap-x-6">
                        <a href="https://disk.yandex.ru/d/eHUz6ZVaFHpBKQ"
                           className="mb-10 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            3-4 день
                        </a>
                    </div>
                    <div className="mt-1 flex items-center justify-center gap-x-6">
                        <a href="https://disk.yandex.ru/d/xsHLMPsxSRGdWg"
                           className="mb-10 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Конференция
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
);

export default SliderSection;