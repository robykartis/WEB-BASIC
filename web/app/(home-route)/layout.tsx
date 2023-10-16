import BaseLayoutHome from '@/components/home/BaseLayoutHome'
import React from 'react'

export default function LayoutHome({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <BaseLayoutHome>
            {children}
        </BaseLayoutHome>

    )
}
