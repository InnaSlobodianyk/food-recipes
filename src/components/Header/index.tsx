import { NavLink } from "react-router-dom";

import Search from "components/Search";
import Navigation from "./Navigation.tsx";

import logo from "assets/food-explorer-logo.svg";

const Header = () => (
  <header className="sticky top-0 flex h-[50px] border-b-[1px] bg-slate-50 dark:border-slate-900 dark:bg-slate-800 md:h-auto">
    <div className="relative mx-auto flex w-full max-w-[1440px] items-center gap-3 px-4 md:gap-5">
      <NavLink to="/">
        <img src={logo} className="logo w-40 md:w-52" alt="FoodExpert logo" />
      </NavLink>

      <Search />

      <Navigation />
    </div>
  </header>
);

export default Header;
