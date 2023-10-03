"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { DashboadrConfig } from "@/config/dashboard"
export function SidebarMobile() {
  const pathname = usePathname()

  return (
    <div className={cn("lg:flex-col lg:space-y-1")}>
      {DashboadrConfig.mainSidebar.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start block px-4 py-2" // Tambahkan kelas ini
          )}
        >
          {item.title}
        </Link>
      ))}
    </div>

  )
}
