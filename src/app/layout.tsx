import { Fredoka } from 'next/font/google'
import { Navbar } from './_components/navbar/Navbar'
import './globals.css'

const inter = Fredoka({ weight: ['400'], subsets: ['latin'] })

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
                <div className="flex flex-col py-8 max-w-7xl mx-auto w-full">
                    {children}
                </div>
            </body>
        </html>
    )
}

import React from 'react'
