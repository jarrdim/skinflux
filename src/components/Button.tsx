"use client";

import React from "react";
import { IconType } from "react-icons/lib";
interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  custom?: string;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({
  label,
  disabled,
  outline,
  small,
  custom,
  icon: Icon,
  onClick,
}: ButtonProps) => {
  return (
    <button
    onClick={onClick}
      disabled={disabled}
      className={` 
        disabled:opacity-70 
        disabled:cursor-not-allowed 
        rounded-md hover:opacity-80 transition w-full border-slate-700 flex item-center justify-center gap-0
        ${outline ? "bg-white ": 'bg-rose-400 '}
        ${outline ? "text-slate-700 ": 'text-white '}
      ${small ? "py-1 px-2":'py-3 px-4 border-2'}
      ${small ? "text-sm":'text-md'}
      ${custom ? custom :""}`}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
