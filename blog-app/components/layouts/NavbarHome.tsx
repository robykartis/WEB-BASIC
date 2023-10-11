'use client';

import { Button, Navbar } from 'flowbite-react';
import { DarkThemeToggle } from 'flowbite-react';

export default function NavbarHome() {
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
                <DarkThemeToggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    active
                    href="#"
                >
                    <p>
                        Home
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#">
                    About
                </Navbar.Link>
                <Navbar.Link href="#">
                    Services
                </Navbar.Link>
                <Navbar.Link href="#">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="#">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}


