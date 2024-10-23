import { Quicksand } from 'next/font/google'
import { Web3Provider } from '@/providers/Web3.provider'
import { Navbar } from './_components/Navbar'
import { Newsletter } from './_components/Newsletter'
import { Footer } from './_components/Footer'

import './globals.css'

const inter = Quicksand({ weight: ['500'], subsets: ['latin'] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} w-full min-h-screen`}>
                <Web3Provider>
                    <Navbar />
                    {children}
                    <Newsletter />
                    <Footer />
                </Web3Provider>
            </body>
        </html>
    )
}
