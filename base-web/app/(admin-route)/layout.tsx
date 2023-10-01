
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
        <div className="container">
          <div className=" space-y-6 p-10 pb-16 md:block">
            <div className="space-y-0.5">
              <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>

            </div>
            <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
              <SidebarNav />
              <div className="flex-1 ">{children}

              </div>
            </div>
          </div>
          <SiteFooter />
        </div>
      </NextAuthSessionProvider>
    </>
  );
}
