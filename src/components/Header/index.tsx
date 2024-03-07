import { Link } from "react-router-dom";

import Search from "components/Search";
import Navigation from "./Navigation.tsx";

const Header = () => (
  <header className="sticky top-0 flex h-[50px] border-b bg-slate-50 dark:border-slate-900 dark:bg-slate-800 md:h-auto">
    <div className="container relative mx-auto flex items-center gap-3 px-4 md:gap-5">
      <Link to="/">
        <img
          src="/public/images/food-explorer-logo.svg"
          className="logo w-40 md:w-52"
          alt="FoodExpert logo"
        />
      </Link>

      <Search />

      <Navigation />
    </div>
  </header>
);

export default Header;
