import { ReactElement, useState } from 'react';
import { createPortal } from 'react-dom';
import MobileMenuNav from './MobileMenuNav.tsx';

const MobileMenu = (): ReactElement => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <>
      <button type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => setIsOpened((prevState) => !prevState)}>
        <span className="sr-only">Открыть меню</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
      </button>
      {isOpened ? createPortal(
        <MobileMenuNav changeState={setIsOpened}/>,
        document.body,
      ) : null}
    </>
  );
};

export default MobileMenu;