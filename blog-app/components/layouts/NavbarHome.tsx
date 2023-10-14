'use client';
import { usePathname } from 'next/navigation'
import {Button, Navbar } from 'flowbite-react';
import Link from 'next/link';



const items =[
    {
        title: "Home",
        href: "/",
        active:false
    },
    {
        title: "Blog",
        href: "/blog",
        active:false
    },
    {
        title: "Device",
        href: "#",
        active:false
    }
]

export default function NavbarHome() {
    const pathname = usePathname()
    
    return (
        <Navbar
            fluid
            className='border-b sticky backdrop-blur-lg bg-white/75 top-0 z-50  dark:bg-opacity-90'
        >
            <Navbar.Brand href="https://flowbite-react.com">
                <img
                    alt="MTI Logo"
                    className="mr-3 h-6 sm:h-9"
                    src="assets/logo/logo.png"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Mituni
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2 gap-2">
                <Button gradientMonochrome="teal">
                    Get started
                </Button>
                <Navbar.Toggle />
                {/* <DarkThemeToggle /> */}
            </div>
            <Navbar.Collapse>
                {items.map((item, index) => (
                    <Navbar.Link
                        key={index}
                        active={pathname === item.href}
                    >
                        <Link href={item.href}>
                        {item.title}
                        </Link>
                    </Navbar.Link>
                ))}
               
              
            </Navbar.Collapse>
        </Navbar>
    )
}


