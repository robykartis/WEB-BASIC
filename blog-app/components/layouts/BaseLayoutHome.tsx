'use client'
import React from 'react'
import NavbarHome from './NavbarHome'
import FooterHome from './FooterHome'
import {  Flowbite } from 'flowbite-react';



export default function BaseLayoutHome({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Flowbite>
                <NavbarHome />
                {children}
                <FooterHome />
            </Flowbite>
            
        
        </>
    )
}
