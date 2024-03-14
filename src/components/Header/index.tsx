import { Link } from "react-router-dom";

import Navigation from "./Navigation.tsx";
import Search from "components/Search";

const Header = () => (
  <header className="sticky top-0 z-10 flex h-[50px] border-b bg-slate-50 bg-opacity-50 backdrop-blur-md backdrop-filter dark:border-slate-900 dark:bg-slate-800 dark:bg-opacity-90 md:h-auto hoverable:hover:bg-opacity-100 dark:hoverable:hover:bg-opacity-100">
    <div className="container relative mx-auto flex items-center gap-3 px-4 md:gap-5">
      <Link to="/">
        <img
          src="/images/food-explorer-logo.svg"
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
