"use client";

import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import queryString from 'query-string';
import { useRouter } from "next/navigation";


const SearchBar = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.searchTerm) return router.push("/");

    const url = queryString.stringifyUrl({
        url:'/',
        query:{
            searchTerm:data.searchTerm
        }
    },{skipNull:true})

    router.push(url)
    reset()
    console.log(data);
  };

  return (
    <div className="flex items-center mb-4">
      <input
        {...register("searchTerm")}
        type="text"
        autoComplete="off"
        className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[0.5px]
        focus:border-slate-500 w-80"
        placeholder="Search Products"
      />
      <button
        onClick={handleSubmit(onSubmit)}
        className="rounded-r-md p-2 hover:opacity-80 text-white bg-slate-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

