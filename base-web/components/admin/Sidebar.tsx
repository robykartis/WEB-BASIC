"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { DashboadrConfig } from "@/config/dashboard"

export function SidebarNav() {
  const path = usePathname()

  return (
    <aside className="hidden w-[200px] flex-col md:flex ">
      <nav className="grid items-start gap-2">
        {DashboadrConfig.mainSidebar.map((item, index) => {
          return (
            item.href && (
              <Link key={index} href={item.disabled ? "/" : item.href}>
                <span
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    path === item.href ? "bg-accent" : "transparent",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {/* <Icons className="mr-2 h-4 w-4" /> */}
                  <span>{item.title}</span>
                </span>
              </Link>
            )
          )
        })}
      </nav>



    </aside>
  )
}
