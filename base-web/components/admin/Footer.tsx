"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
export default function FooterAdmin() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center py-3 gap-4">
      <span className="text-center">Copyright © 2022</span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
        <Moon className="hidden h-5 w-5 dark:block" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}
