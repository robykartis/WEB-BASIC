"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"


const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Account",
    href: "/examples/forms/account",
  },
  {
    title: "Appearance",
    href: "/examples/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/examples/forms/notifications",
  },
  {
    title: "Display",
    href: "/examples/forms/display",
  },
]

export function SidebarMobile() {
  const pathname = usePathname()

  return (
    <div className={cn("lg:flex-col lg:space-y-1")}>
      {items.map((item) => (
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
