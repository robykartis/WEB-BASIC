import React from 'react'
import Navbar from './Navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home',
    description: 'Generated home',
}

export default function BaseLayoutHome({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
