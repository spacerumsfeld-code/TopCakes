import Image from 'next/image'
import Link from 'next/link'
import { AuthButton } from '../auth-button/AuthButton'
import { getUserAddress } from '@/app/data'
import { NavbarDropdown } from './NavDropdown'
import { MobileDropdown } from './MobileDropdown'

export const Navbar = async () => {
    const { address } = await getUserAddress()

    return (
        <header className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav className="flex justify-between items-center">
                    <Link href="/">
                        <div className="flex items-center">
                            <Image
                                src="/logoNoBG.png"
                                alt="TopCak.es Logo"
                                width={45}
                                height={45}
                            />
                            <span className="hidden md:inline ml-2 text-2xl font-bold text-[#261230]">
                                TopCak.es
                            </span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/leaderboard"
                            className="text-[#261230] hover:text-[#65c3c8]"
                        >
                            Leaderboard
                        </Link>
                        <Link
                            href="/bakery"
                            className="text-[#261230] hover:text-[#65c3c8]"
                        >
                            Bakery
                        </Link>
                        <Link
                            href="/bake-off"
                            className="text-[#261230] hover:text-[#65c3c8]"
                        >
                            Bakeoff
                        </Link>
                    </div>
                    <div className="flex items-center space-x-2">
                        <NavbarDropdown address={address} />
                        <MobileDropdown address={address} />
                        <AuthButton />
                    </div>
                </nav>
            </div>
        </header>
    )
}
