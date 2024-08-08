"use client";

import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";
import GButton from "@/components/Button";
import { AiOutlineGoogle } from "react-icons/ai";

interface Props {
  currentUser: SafeUser | null;
}

const formSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be 8 characters"),
});

const SignInForm = ({ currentUser }: Props) => {
  const formMethods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("cart");
      router.refresh();
    }
  }, []);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("values", values);

    signIn("credentials", {
      ...values,
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
      <GButton
        outline
        icon={AiOutlineGoogle}
        label="Continue with Google "
        onClick={() => {
          signIn("google");
        }}
      />
      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-stone-800"></div>
        <span className="mx-4 text-stone-800">or</span>
        <div className="flex-grow h-px bg-stone-800"></div>
      </div>
      <div className="flex items-center justify-center my-4">
        ENTER YOUR
      </div>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className="w-full   "
        >
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="mail@example.com"
                    type="text"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your Password"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-4">
            {" "}
            Sign In{" "}
          </Button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-stone-800"></div>
          <span className="mx-4 text-stone-800">or</span>
          <div className="flex-grow h-px bg-stone-800"></div>
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          If you dont &apos;t have an account, please&nbsp;
          <Link className="text-blue-500 hover:underline" href="/sign-up">
            Sign Up
          </Link>
        </p>
      </FormProvider>
    </>
  );
};

export default SignInForm;
