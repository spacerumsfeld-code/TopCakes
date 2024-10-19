import { Button } from '@/ui/components/button'
import Image from 'next/image'
import Link from 'next/link'

// @TODO: Add Connect button from ThirdWeb
// @TODO: Add functional links once the related pages are added.
// @TODO: Ensure mobile functionality
// @TODO: Fix icon (give transparent background and increase size)
// @TODO: Properly center all Link Items
// @TODO: Get shadow to show up as it does in v0 preview.

export const Navbar = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Image
                            src="/topCakesLogo.png"
                            alt="TopCak.es Logo"
                            width={32}
                            height={32}
                            className="h-8 w-8"
                        />
                        <span className="ml-2 text-2xl font-bold text-[#261230]">
                            TopCak.es
                        </span>
                    </div>
                    <div className="flex space-x-4">
                        <Link
                            href="#create"
                            className="text-[#261230] hover:text-[#65c3c8]"
                        >
                            Create
                        </Link>
                        <Link
                            href="#battle"
                            className="text-[#261230] hover:text-[#65c3c8]"
                        >
                            Cake Battle
                        </Link>
                        <Link
                            href="#marketplace"
                            className="text-[#261230] hover:text-[#65c3c8]"
                        >
                            Marketplace
                        </Link>
                        <Button className="bg-[#65c3c8] hover:bg-[#42b2b8] text-white">
                            Sign Up
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
