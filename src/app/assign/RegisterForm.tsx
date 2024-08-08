"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/inputs/input";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/dist/client/components/navigation";
import { SafeUser } from '@/types'

interface Props {
  currentUser: SafeUser | null;
}
const RegisterForm = ({currentUser}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
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

    axios.post("/api/register", data)
      .then(() => {
        toast.success("Account created");

        signIn("credentials", {
          email: data.email,
          password: data.password,
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
      })
      .catch(() => toast.error("Oops something went wrong. Please try again"))
      .finally(() => {
        setIsLoading(false);
      });
  };

    if (currentUser) {
    return <p className="text-center">Logged in. Redirecting....</p>;
  }

  return (
    <>
      <Heading title="SkinnFlux Sign Up Form" />
      <Input
        id="name"
        label="Username"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
        label={isLoading ? "Loading" : "Sign Up"}
        onClick={handleSubmit(onSubmit)}
      />
      <div className="flex items-center my-4 w-full">
        <div className="flex-grow h-px bg-stone-800 "></div>
        <span className="mx-4 text-stone-800">or</span>
        <div className="flex-grow h-px bg-stone-800"></div>
      </div>

      <p className="text-center text-sm text-gray-600 mt-2">
        Already have an account? Please&nbsp;
        <Link className="text-blue-500 hover:underline" href="/login">
          Sign In
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;