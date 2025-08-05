import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export const cn = (...args: ClassValue[]) => twMerge(clsx(args));

export const capitalizeFirstLetter = (string: string) => string?.charAt(0).toUpperCase() + string.slice(1) || "";

export const currentYear: number = new Date().getFullYear();

export const getMealUrl = (urlPath: string, id: string, name: string): string => {
  return `${urlPath}/${id}-${name.toLowerCase().replace(/[&(),']/g, '').replace(/\s+/g, '-')}`;
}