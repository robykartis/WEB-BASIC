import BaseLayoutHome from '@/components/layouts/BaseLayoutHome'
import React from 'react'

export default function LayoutHome({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <BaseLayoutHome>
                {children}
            </BaseLayoutHome>
        </>
    )
}
