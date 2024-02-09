import { NavLink } from 'react-router-dom';

import Search from 'components/Search';
import Navigation from './Navigation.tsx';

import logo from 'assets/food-explorer-logo.svg';

const Header = () => (
  <header className='flex bg-slate-50 dark:bg-slate-800 border-b-[1px] dark:border-slate-900 h-[50px] md:h-auto sticky top-0'>
    <div className='flex items-center gap-3 md:gap-5 px-4 max-w-[1440px] mx-auto w-full relative'>
      <NavLink to='/'>
        <img src={ logo } className='logo w-40 md:w-52' alt='FoodExpert logo' />
      </NavLink>

      <Search />

      <Navigation />
    </div>
  </header>
);

export default Header;
