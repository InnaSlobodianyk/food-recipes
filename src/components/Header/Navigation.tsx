import { useEffect, useRef, useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

import { cn } from "helpers";

import MainNav from "./MainNav.tsx";

const windowWidthInitialState: number = window.innerWidth;

const Navigation = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHoverable, setIsHoverable] = useState<boolean>(false);
  const [_, setWindowSize] = useState<number>(windowWidthInitialState);

  const { pathname } = useLocation();

  const handleClickBurger = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(() => window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    const isHoverableDevice = window.matchMedia("(hover: hover)");
    setIsOpen(false);
    setIsHoverable(() => isHoverableDevice.matches);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <nav>
      {isHoverable ? null : (
        <button
          ref={buttonRef}
          className="p-2 text-2xl md:hidden"
          onClick={handleClickBurger}
        >
          {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>
      )}

      <div
        ref={menuRef}
        className={cn(
          isOpen
            ? "absolute left-0 right-0 top-[50px] h-[calc(100vh-50px)] bg-slate-800 p-4 md:static md:h-auto md:p-0"
            : "hidden md:block",
        )}
      >
        <MainNav />
      </div>
    </nav>
  );
};

export default Navigation;
