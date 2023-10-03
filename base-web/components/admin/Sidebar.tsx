"use client"

import { DashboadrConfig } from "@/config/dashboard"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

import * as React from "react"
import SiteFooter from "../site-footer"
import { ThemeToggle } from "../theme-toggle"
import FooterAdmin from './Footer';
export function SidebarNav({ open, setOpen }: any) {

  const path = usePathname()

  return (
    <div className={`fixed inset-y-0 left-0 z-40 flex-shrink-0 ${open ? "" : "hidden lg:block"}`}>
      <div
        className={` ${open ? "w-40" : "w-60"} flex flex-col h-screen p-3 backdrop-blur-lg shadow duration-300`}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between py-3">
            <h2 className="text-xl font-bold ">MTI</h2>

            <button onClick={() => setOpen(!open)} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto max-h-[calc(100vh-5rem)] py-7">
            {/* Konten sidebar dan daftar menu */}
            <ul className="pt-2 pb-4 space-y-1 text-sm mb-10">
              {/* Tambahkan daftar menu Anda di sini */}
              {DashboadrConfig.mainSidebar.map((item, index) => (
                <li key={index} className="rounded-sm">
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-black",
                      path === item.href ? "bg-accent" : "transparent",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </div>

  )
}
