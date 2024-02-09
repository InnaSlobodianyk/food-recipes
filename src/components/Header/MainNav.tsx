import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import {
  IoEarthOutline,
  IoFastFoodOutline,
  IoListOutline
} from 'react-icons/io5';

export type MenuType = {
  url: string,
  title: string,
  icon?: ReactNode
};

export const menu: MenuType[] = [
  {
    url: '/categories',
    title: 'Categories',
    icon: <IoFastFoodOutline />
  },
  {
    url: '/countries',
    title: 'Areas',
    icon: <IoEarthOutline />
  },
  {
    url: '/ingredient/320-Turmeric',
    title: 'Ingredients',
    icon: <IoListOutline />
  },
];

const menuItemClassName = 'flex text-indigo-600 dark:text-indigo-400 [&:has(.active)]:text-indigo-900 dark:[&:has(.active)]:text-indigo-600 group-hover:text-indigo-400 dark:group-hover:text-indigo-600 hover:!text-indigo-600 dark:hover:!text-indigo-400 transition-colors';

const MainNav = () => (
  <ul className='flex flex-col items-end md:flex-row md:items-normal group'>
    { menu.map(( menuItem: MenuType ) => (
      <li
        key={ menuItem.title }
        className={ menuItemClassName }
      >
        <NavLink
          to={ menuItem.url }
          className='flex items-center px-3 py-2 md:py-5'
        >
          <span className='text-xl mr-2'>{ menuItem.icon }</span>
          { menuItem.title }
        </NavLink>
      </li>
    ) ) }
  </ul>
);

export default React.memo(MainNav);
