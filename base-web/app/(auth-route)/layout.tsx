import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SiteFooter from "@/components/site-footer";

interface PrivateLayoutProps {
  children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions)

  if (session) {
    redirect('/dashboard')
  }

  return (

    <main>
      <div className="min-h-screen">{children}</div>
      <SiteFooter />
    </main>

  )
}
