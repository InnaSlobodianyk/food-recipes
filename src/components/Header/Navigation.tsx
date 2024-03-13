import { useCallback, useEffect, useMemo, useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import debounce from "lodash.debounce";

import { cn } from "helpers";
import { useClickOutside } from "hooks/useClickOutside.tsx";

import MainNav from "./MainNav.tsx";

const isHoverableDevice = window.matchMedia("(hover: hover)");

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useClickOutside(
    (isClickInside) => !isClickInside && setIsOpen(false),
  );

  const { pathname } = useLocation();

  const isHoverable = useMemo(
    () => isHoverableDevice.matches,
    [isHoverableDevice.matches],
  );

  const handleDebounced = useCallback(
    debounce(() => setIsOpen(false), 300),
    [],
  );

  const handleClickBurger = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("resize", handleDebounced);

    return () => {
      window.removeEventListener("resize", handleDebounced);
    };
  }, []);

  return (
    <nav ref={menuRef}>
      {isHoverable ? null : (
        <button className="p-2 text-2xl md:hidden" onClick={handleClickBurger}>
          {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>
      )}

      <div
        className={cn(
          isOpen && !isHoverable
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
