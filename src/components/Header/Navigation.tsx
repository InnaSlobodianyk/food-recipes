import { useEffect, useRef, useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

import MainNav from "./MainNav.tsx";

const Navigation = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { pathname } = useLocation();

  const handleClickBurger = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.querySelector("body")!.style.overflow = "hidden";
    }

    return () => {
      document.querySelector("body")!.removeAttribute("style");
    };
  }, [isOpen]);

  return (
    <nav>
      <button
        ref={buttonRef}
        className="p-2 text-2xl md:hidden"
        onClick={handleClickBurger}
      >
        {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>

      <div
        className={clsx(
          isOpen
            ? "absolute left-0 right-0 top-[50px] h-[calc(100vh-50px)] bg-slate-800 p-4"
            : "hidden md:block",
        )}
      >
        <MainNav />
      </div>
    </nav>
  );
};

export default Navigation;
