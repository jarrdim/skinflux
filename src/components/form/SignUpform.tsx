"use client";

import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/dist/client/components/navigation";
import axios from "axios";
import { signIn } from "next-auth/react";
import { SafeUser } from "@/types";
import GButton from "@/components/Button";
import { AiOutlineGoogle } from "react-icons/ai";

interface Props {
  currentUser: SafeUser | null;
}

const formSchema = z
  .object({
    name: z.string().min(1, "Username is required").max(30),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const SignUpForm = ({ currentUser }: Props) => {
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
    console.log("Form values:", values);

    /////STRAT
    axios
      .post("/api/register", values)
      .then(() => {
        toast.success("Account created");

        signIn("credentials", {
          email: values.email,
          password: values.password,
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
        // setIsLoading(false);
      });

    ///END
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
        <form onSubmit={formMethods.handleSubmit(onSubmit)} className="w-50 ">
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="HarvindSingh"
                    type="string"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                <FormLabel>Enter Password</FormLabel>
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
          <FormField
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Re-Enter Password</FormLabel>
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
            Sign Up
          </Button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-stone-800"></div>
          <span className="mx-4 text-stone-800">or</span>
          <div className="flex-grow h-px bg-stone-800"></div>
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          Already have an account? Please&nbsp;
          <Link className="text-blue-500 hover:underline" href="/sign-in">
            Sign In
          </Link>
        </p>
      </FormProvider>
    </>
  );
};

export default SignUpForm;
