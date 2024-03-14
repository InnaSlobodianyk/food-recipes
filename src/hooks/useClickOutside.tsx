import { useEffect, useRef } from "react";

export const useClickOutside = (callback: (isClickInside: boolean) => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const isClickedInside = Boolean(ref.current?.contains(event.target as Node));

      callback(isClickedInside);
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);

  return ref;
};
