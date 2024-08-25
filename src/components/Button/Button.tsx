"use client";

import { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${className} w-full p-2 border transition hover:border-primary hover:text-primary`}
    >
      {children}
    </button>
  );
};

export default Button;
