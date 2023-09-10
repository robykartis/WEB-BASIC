'use client';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white text-2xl font-bold">
                    Logo
                </a>
                <div className="md:hidden">
                    <button
                        className="text-white"
                        onClick={toggleNavbar}
                    >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                <div
                    className={`md:flex ${isOpen ? 'block' : 'hidden'
                        } md:block space-x-4`}
                >
                    <a href="#" className="text-white">
                        Beranda
                    </a>
                    <a href="#" className="text-white">
                        Tentang Kami
                    </a>
                    <a href="#" className="text-white">
                        Layanan
                    </a>
                    <a href="#" className="text-white">
                        Kontak
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
