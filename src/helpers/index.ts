import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export const cn = (...args: ClassValue[]) => twMerge(clsx(args));

export const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);
