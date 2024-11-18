import { Button } from '@/ui/components/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/ui/components/dropdown-menu'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export const MobileDropdown = (props: { address: string | null }) => {
    return (
        <div className="md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                    {props.address && (
                        <>
                            <DropdownMenuItem asChild>
                                <Link href="/create-cake">Create Cake</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/my-cakes">My Cakes</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/favorites">Favorites</Link>
                            </DropdownMenuItem>
                        </>
                    )}
                    <DropdownMenuItem asChild>
                        <Link
                            href="/leaderboard"
                            className="text-[#261230] hover:text-[#65c3c8]"
                        >
                            Leaderboard
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link
                            href="/bakery"
                            className="text-[#261230] hover:text-[#65c3c8]"
                        >
                            Bakery
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link
                            href="/bake-off"
                            className="text-[#261230] hover:text-[#65c3c8]"
                        >
                            Bakeoff
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
