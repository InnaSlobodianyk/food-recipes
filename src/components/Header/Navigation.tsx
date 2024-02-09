import { useEffect, useRef, useState } from 'react';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import MainNav from './MainNav.tsx';

const Navigation = () => {
  const buttonRef = useRef<HTMLButtonElement>( null );

  const [ isOpen, setIsOpen ] = useState<boolean>( false );

  const { pathname } = useLocation();

  const handleClickBurger = () => {
    setIsOpen( prevState => !prevState );
  };

  useEffect(() => {
    setIsOpen( false );
  }, [ pathname ]);

  useEffect(() => {
    if( isOpen ) {
      document.querySelector('body')!.style.overflow = 'hidden';
    }

    return () => {
      document.querySelector('body')!.removeAttribute('style');
    }
  }, [ isOpen ]);

  return (
    <nav>
      <button
        ref={ buttonRef }
        className='md:hidden p-2 text-2xl'
        onClick={ handleClickBurger }
      >
        { isOpen ? <IoCloseOutline /> : <IoMenuOutline /> }
      </button>

      <div className={ clsx( isOpen ? 'absolute top-[50px] left-0 right-0 bg-slate-800 h-[calc(100vh-50px)] p-4' : 'hidden md:block' ) }>
        <MainNav />
      </div>
    </nav>
  );
};

export default Navigation;
