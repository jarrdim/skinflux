"use client";

import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
const input = ({
  id,
  label,
  type,
  disabled,
  register,
  required,
  errors,
}: InputProps) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        autoComplete="off"
        {...register(id, { required })}
        placeholder=""
        type={type}
        className={`
        p-4 w-full peer transition rounded-md border-2 font-light
        bg-white outline-none disabled: opacity-70 disabled:cursor-not-allowed
        ${errors[id] ? "border-rose-400" : "border-slate-300"}
        ${errors[id] ? "focus:border-rose-400" : "focus:border-slate-300"}
        `}
      />

      <label
        className={`absolute transform -translate-y-3  top-5 z-10 origin-[0] left-4  duration-150 text-md cursor-text
      peer-placeholder-shown:scale-100
      peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
      peer-focus:-translate-y-4 
        ${errors[id] ? "text-rose-500" : "text-slate-400"}
       

      `}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default input;
