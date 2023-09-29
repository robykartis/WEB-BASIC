"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { DashboadrConfig } from "@/config/dashboard"

export function SidebarNav() {
  const pathname = usePathname()

  return (

    <aside className={cn("-mx-4 lg:w-1/5", "hidden md:block")}>
      <nav className={cn("flex flex-col space-y-1 lg:space-y-2")}>
        {DashboadrConfig.mainSidebar.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === item.href
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
              "justify-start px-4 py-2" // Add this class for spacing
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
