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
import { SidebarNav } from "./Sidebar";

const items: { title: string; href: string; description: string; disable?: boolean }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",

  },

]

export function MainNav() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter();
  async function logout() {
    await signOut({
      redirect: false,
    });

    router.replace("/");
  }
  return (
    <header className="bg-blend-lighten border-b p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Tombol Menu Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="text-black lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12h18M3 6h18M3 18h18"
              />
            </svg>
          </button>
          <h1 className=" text-2xl font-semibold">Dashboard Admin</h1>
        </div>
        <Button
          onClick={logout}
        >Logout</Button>
      </div>
      {/* Sidebar yang akan muncul saat tombol menu ditekan */}
      <SidebarNav open={open} setOpen={setOpen} />
    </header>
  );
}
