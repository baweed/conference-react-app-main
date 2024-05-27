import { FC } from 'react';
import { IMember } from '../../types/members.ts';
import MemberCard from './MemberCard.tsx';

interface MembersCardsContainerProps {
  title: string;
  members: IMember[];
}

const MembersCardsContainer: FC<MembersCardsContainerProps> = ({
  title,
  members
}) => {
  const cardElements = members.map((member) => <MemberCard memberData={member}/>);

  return (
    <>
      <h2 className="font-bold text-3xl xs:text-2xl xs:mt-[100px] mb-20 xs:px-6 ">
        {title}
      </h2>
      <div id="Cards-first"
        className="flex flex-wrap items-stretch content-center justify-around gap-x-6">
        {...cardElements}
      </div>
    </>
  );
};

export default MembersCardsContainer;