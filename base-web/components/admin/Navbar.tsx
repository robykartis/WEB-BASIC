'use client';
import * as React from "react"
import Link from "next/link";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { SidebarMobile } from "./SidebarMobile";

const items: { title: string; href: string; description: string; disable?: boolean }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",

  },

]

export function MainNav() {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
  const router = useRouter();
  async function logout() {
    await signOut({
      redirect: false,
    });

    router.replace("/");
  }
  return (
    <>

      <header className="sticky top-0 w-full border-b  backdrop-filter z-30 backdrop-blur-md ">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
              <Icons.logo />
              <span className="hidden font-bold sm:inline-block">
                Wep APP
              </span>
            </Link>
            {items?.length ? (
              <nav className="hidden gap-6 md:flex">

                {items?.map((item, index) => (
                  <Link
                    key={index}
                    href={'/'}
                    className={cn(
                      "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",

                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            ) : null}
            <button
              className="flex items-center space-x-2 md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <Icons.close /> : <Icons.logo />}
              <span className="font-bold">Menu</span>
            </button>
            {showMobileMenu && items && (
              <div
                className={cn(
                  "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
                )}
              >
                <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
                  <Link href="/" className="flex items-center space-x-2">
                    <Icons.logo />
                    <span className="font-bold">Web APP</span>
                  </Link>
                  <SidebarMobile />

                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-end space-x-4">

            <Button
              onClick={logout}
            >Logout</Button>

            {/* <ThemeToggle /> */}
          </div>
        </div>

      </header>
    </>
  );
}
