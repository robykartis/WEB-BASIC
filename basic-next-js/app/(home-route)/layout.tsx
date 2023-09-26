import NavbarHome from "@/components/Home/Navbar"
import { Metadata } from "next"



export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function HomeLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <NavbarHome />
            {children}
        </main>
    )
}