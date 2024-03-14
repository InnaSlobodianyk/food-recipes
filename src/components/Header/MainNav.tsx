import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import {
  IoEarthOutline,
  IoFastFoodOutline,
  IoListOutline,
} from "react-icons/io5";

export type MenuType = {
  url: string;
  title: string;
  icon?: ReactNode;
};

export const menu: MenuType[] = [
  {
    url: "/categories",
    title: "Categories",
    icon: <IoFastFoodOutline />,
  },
  {
    url: "/countries",
    title: "Areas",
    icon: <IoEarthOutline />,
  },
  {
    url: "/ingredient/320-Turmeric",
    title: "Ingredients",
    icon: <IoListOutline />,
  },
];

const menuItemClassName =
  "text-indigo-600 transition-colors hoverable:hover:!text-indigo-600 hoverable:group-hover:text-indigo-400 dark:text-indigo-400 dark:hoverable:hover:!text-indigo-400 dark:hoverable:group-hover:text-indigo-600 [&:has(.active)]:text-indigo-900 dark:[&:has(.active)]:text-indigo-600";

const MainNav = () => (
  <ul className="md:items-normal group flex flex-col items-end md:flex-row">
    {menu.map((menuItem: MenuType) => (
      <li key={menuItem.title} className={menuItemClassName}>
        <NavLink
          to={menuItem.url}
          className="flex items-center gap-2 px-3 py-2 md:py-5"
        >
          {menuItem.icon ? (
            <span className="text-xl">{menuItem.icon}</span>
          ) : null}
          <span>{menuItem.title}</span>
        </NavLink>
      </li>
    ))}
  </ul>
);

export default React.memo(MainNav);
