'use client'
import React from 'react'
import {Button, Navbar } from "flowbite-react";
import Image from 'next/image';

const NavbarHome = () => {
    return (
        <Navbar
        className='sticky top-0 z-50 backdrop-blur-xl bg-white/30 border-b'
          fluid
          rounded
        >
          <Navbar.Brand href="https://flowbite-react.com">
            <Image
              alt="Flowbite React Logo"
              className="mr-3 h-6 sm:h-9"
              src="https://flowbite.com/docs/images/logo.svg"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite React
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Button>
              Get started
            </Button>
            <Navbar.Toggle />
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

export default NavbarHome