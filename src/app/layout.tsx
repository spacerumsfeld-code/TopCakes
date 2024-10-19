import { Quicksand } from 'next/font/google'
import { Navbar } from './_components/Navbar'
import { Newsletter } from './_components/Newsletter'
import { Footer } from './_components/Footer'

import './globals.css'

/**
 * "Fredoka" - A rounded, soft font that has a friendly and approachable feel. It comes in various weights, which makes it versatile for both headings and body text.
"Quicksand" - A rounded sans-serif font with a geometric touch. It has a modern yet playful look that could complement the cake theme nicely.
 */

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
