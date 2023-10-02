
import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import { SidebarNav } from "@/components/admin/Sidebar";
import { MainNav } from "@/components/admin/Navbar";
import SiteFooter from "@/components/site-footer";
import { DashboadrConfig } from "@/config/dashboard";


interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <NextAuthSessionProvider>
        <MainNav />
        <div className="flex pb-28">
          {children}
        </div>
        <SiteFooter />
      </NextAuthSessionProvider>
    </>
  );
}
