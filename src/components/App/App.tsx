import { FC, useState } from 'react';
import Header from '../Header/Header.tsx';
import PromoSection from '../PromoSection/PromoSection.tsx';
import InfoSection from '../InfoSection/InfoSection.tsx';
import MembersSection from '../MembersSection/MembersSection.tsx';
// import FormSection from '../FormSection/FormSection.tsx';
import ArticleRulesSection
  from '../ArticleRulesSection/ArticleRulesSection.tsx';
import { HeaderThemes } from '../../types/headerThemes.ts';
import ContactsSection from '../ContactsSection/ContactsSection.tsx';
import FormSection from '../FormSection/FormSection.tsx';
// import SliderSection from '../SliderSection/SliderSection.tsx';

const App: FC = () => {
  const [headerTheme, setHeaderTheme] = useState<HeaderThemes>(HeaderThemes.transparent);
  return (
    <>
      <Header headerTheme={headerTheme}/>
      <PromoSection setHeaderTheme={setHeaderTheme}/>
      <InfoSection setHeaderTheme={setHeaderTheme}/>
      {/* <SliderSection setHeaderTheme={setHeaderTheme}/> */}
      <MembersSection setHeaderTheme={setHeaderTheme}/>
      <FormSection setHeaderTheme={setHeaderTheme}/>
      <ArticleRulesSection setHeaderTheme={setHeaderTheme}/>
      <ContactsSection setHeaderTheme={setHeaderTheme}/>
    </>
  );
};

export default App;
