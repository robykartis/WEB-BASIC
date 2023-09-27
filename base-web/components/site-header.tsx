'use client';
import * as React from "react"
import Link from "next/link";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";

const items = [
  {
    title: "Documentation",
    href: "/",
  },
  {
    title: "GitHub",
    href: "/",
  },
  {
    title: "Twitter",
    href: "/",
  },
];

export function SiteHeader() {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
  return (
    <>
      <div className="bg-white/10  backdrop-filter z-30 backdrop-blur-md bg-opacity-80 ">
        <p className="text-center text-sm font-medium">
          Love Alpine JS?
          <a href="#" className="inline-block underline">
            Check out this new course!
          </a>
        </p>
      </div>
      <header className="sticky top-0 w-full border-b bg-white/10  backdrop-filter z-30 backdrop-blur-md bg-opacity-80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
              <Icons.logo />
              <span className="hidden font-bold sm:inline-block">
                dfsfsdfs
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
                    <span className="font-bold">dasdada</span>
                  </Link>
                  <nav className="grid grid-flow-row auto-rows-max text-sm">
                    {items.map((item, index) => (
                      <Link
                        key={index}
                        href={'/'}
                        className={cn(
                          "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>
                  sadadsada
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-end space-x-4">
            <Button>Login</Button>
            <ThemeToggle />
          </div>
        </div>

      </header>
    </>
  );
}
