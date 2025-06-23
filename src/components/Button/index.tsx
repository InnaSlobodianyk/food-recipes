import React, { ReactNode } from "react";

import { cn } from "helpers";

export enum ButtonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}

export enum ButtonVariant {
  primary = "primary",
  outlined = "outlined",
}

export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
}

type ButtonProps = {
  type?: ButtonType;
  disabled?: boolean;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
};

const variantClass = {
  primary:
    "bg-indigo-700 text-white hoverable:hover:bg-indigo-600 hoverable:group-hover:bg-indigo-600",
  outlined:
    "border text-indigo-700 hoverable:hover:bg-indigo-50 hoverable:group-hover:bg-indigo-50 dark:text-white dark:hoverable:hover:bg-indigo-600 dark:hoverable:group-hover:bg-indigo-600",
};

const sizesClasses = {
  small: "py-1 px-3 text-sm",
  medium: "py-2 px-5 text-base",
  large: "py-3 px-8 text-lg",
};

const Button = ({
  type = ButtonType.button,
  className,
  variant = ButtonVariant.primary,
  size = ButtonSize.medium,
  children,
  ...rest
}: ButtonProps) => {
  const buttonClasses = cn(
    "rounded-full font-semibold shadow-md focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-opacity-75",
    variantClass[variant],
    sizesClasses[size],
    className,
  );

  return (
    <button className={buttonClasses} type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
