import { Quicksand } from 'next/font/google'
import { Navbar } from './_components/Navbar'
import { Newsletter } from './_components/Newsletter'
import { Footer } from './_components/Footer'

import './globals.css'

// alternative: Fredoka
const inter = Quicksand({ weight: ['500'], subsets: ['latin'] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} w-full min-h-screen`}>
                <Navbar />
                {children}
                <Newsletter />
                <Footer />
            </body>
        </html>
    )
}
