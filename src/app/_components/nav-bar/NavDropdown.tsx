'use client'

import { Button } from '@/ui/components/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/ui/components/dropdown-menu'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export const NavbarDropdown = (props: { address: string | null }) => {
    if (!props.address) return null

    return (
        <div className="hidden md:block">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                        <Link href="/create-cake">Create Cake</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/my-cakes">My Cakes</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/favorites">Favorites</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
