import {Dispatch, FC, memo, SetStateAction} from 'react';
import MembersCardsContainer from './MembersCardsContainer.tsx';
import {internationalCommittee, organisingCommittee} from './memberData.ts';
import {useHeaderTheme} from '../../hooks/useHeaderTheme.ts';
import {HeaderThemes} from '../../types/headerThemes.ts';
import {useTranslation} from 'react-i18next';

const MembersSection: FC<{
  setHeaderTheme: Dispatch<SetStateAction<HeaderThemes>>
}> = memo(({setHeaderTheme}) => {
  const themeRef = useHeaderTheme(HeaderThemes.light, setHeaderTheme);
  const {t} = useTranslation();

  //TODO: Надо ли переводить карточки?

  return (
    <section ref={themeRef} className="bg-white">
      <div className="container mx-auto py-6 ">
        <h1 id={'members-international'}
          className="font-bold text-3xl mb-16 xs:mb-8 xs:px-6 uppercase xs:text-2xl scroll-mt-48 xs:scroll-mt-20">
          {t('membersSection.intHeading')}
        </h1>
        <MembersCardsContainer title={t('membersSection.intChairs')}
          // members={i18n.language === 'ru-RU' ? internationalCommittee.ru.chairs : internationalCommittee.en.chairs}
          members={internationalCommittee.ru.chairs}
        />
        <MembersCardsContainer title={t('membersSection.organisingIntChairs')}
          // members={i18n.language === 'ru-RU' ? internationalCommittee.ru.organisingIntChairs : internationalCommittee.en.organisingIntChairs}
          members={internationalCommittee.ru.organisingIntChairs}
        />
        <MembersCardsContainer title={t('membersSection.intMembers')}
          // members={i18n.language === 'ru-RU' ? internationalCommittee.ru.members : internationalCommittee.en.members}
          members={internationalCommittee.ru.members}
        />
        <h1 id={'members-organising'}
          className="font-bold text-3xl mb-16 xs:mb-8 xs:px-6 uppercase xs:text-2xl scroll-mt-48 xs:scroll-mt-20"
        >
          {t('membersSection.organisingHeading')}
        </h1>
        <MembersCardsContainer
          title={t('membersSection.organisingChairs')}
          // members={i18n.language === 'ru-RU' ? organisingCommittee.ru.coChairs : organisingCommittee.en.coChairs}
          members={organisingCommittee.ru.chairs}
        />
        <MembersCardsContainer
          title={t('membersSection.organisingCoChairs')}
          // members={i18n.language === 'ru-RU' ? organisingCommittee.ru.coChairs : organisingCommittee.en.coChairs}
          members={organisingCommittee.ru.coChairs}
        />
        <MembersCardsContainer title={t('membersSection.organisingMembers')}
          // members={i18n.language === 'ru-RU' ? organisingCommittee.ru.members : organisingCommittee.en.members}
          members={organisingCommittee.ru.members}
        />

        <MembersCardsContainer title={t('membersSection.secretaryHeading')}
          // members={i18n.language === 'ru-RU' ? organisingCommittee.ru.members : organisingCommittee.en.members}
          members={organisingCommittee.ru.secretary}
        />
        {/* <MembersCardsContainer title={t('membersSection.techSecretaryHeading')}
          // members={i18n.language === 'ru-RU' ? organisingCommittee.ru.members : organisingCommittee.en.members}
          members={organisingCommittee.ru.techSecretary}
        /> */}


      </div>
    </section>
  );
});

export default MembersSection;