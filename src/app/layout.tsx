import { Inter } from 'next/font/google'
import { Navbar } from './_components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-grid-small-white/[0.2] w-full h-full`}
            >
                <Navbar />
                <div className="flex flex-col py-8">{children}</div>
            </body>
        </html>
    )
}

import React from 'react'
