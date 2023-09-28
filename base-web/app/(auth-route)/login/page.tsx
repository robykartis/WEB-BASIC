"use client";

import * as React from "react"
import { Icons } from "@/components/icons";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter();

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true)

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.log(result);
      setIsLoading(false)
      return;
    }
    setIsLoading(false)
    router.replace("/dashboard");
  }

  return (

    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>

        <div className={cn("grid gap-6")} >
          <form onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"

                />
                {/* {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )} */}
              </div>
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="email">
                  Password
                </Label>
                <Input
                  id="password"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoCapitalize="none"
                  autoCorrect="off"

                />
                {/* {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )} */}
              </div>
              <button className={cn(buttonVariants())} type="submit" disabled={isLoading}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Login
              </button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

        </div>



        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/register"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>






    // <div className="flex flex-col items-center justify-center w-full h-screen">
    //   <h1 className="text-3xl mb-6">Login </h1>

    //   <form className="w-[400px] flex flex-col gap-6" onSubmit={handleSubmit}>
    //     <input
    //       className="h-12 rounded-md p-2 bg-transparent border border-gray-300"
    //       type="text"
    //       name="email"
    //       placeholder="Masukan Email"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />

    //     <input
    //       className="h-12 rounded-md p-2 bg-transparent border border-gray-300"
    //       type="password"
    //       name="password"
    //       placeholder="Masukan Password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />

    //     <button
    //       type="submit"
    //       className="h-12 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400"
    //     >
    //       Login
    //     </button>
    //   </form>
    // </div>
  );
}
