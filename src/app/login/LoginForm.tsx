"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/inputs/input";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/dist/client/components/navigation";
import { SafeUser } from "@/types";

interface Props {
  currentUser: SafeUser | null;
}
const LoginForm = ({ currentUser }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  useEffect(() => {
    if (currentUser) {
      router.push("cart");
      router.refresh();
    }
  }, []);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        toast.success("Logged In");
        router.push("/cart");
        router.refresh();
      } else if (callback?.error) {
        console.error("Sign-in error:", callback.error);
        toast.error(callback.error);
      }
    });
  };

  if (currentUser) {
    return <p className="text-center">Logged in. Redirecting....</p>;
  }
  return (
    <>
      <Heading title="SkinnFlux Log In Form" />

      <Input
        id="email"
        label="mail@example.com"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="email"
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Button
        label={isLoading ? "Loading" : "Log In"}
        onClick={handleSubmit(onSubmit)}
      />
      <div className="flex items-center my-4 w-full">
        <div className="flex-grow h-px bg-stone-800"></div>
        <span className="mx-4 text-stone-800">or</span>
        <div className="flex-grow h-px bg-stone-800"></div>
      </div>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you dont &apos;t have an account, please&nbsp;
        <Link className="text-blue-500 hover:underline" href="/assign">
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
