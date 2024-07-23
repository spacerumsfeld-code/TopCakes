'use client'

import React, { useState } from 'react'
import { Menu, MenuItem, ProductItem } from '@/ui/NavbarMenu'
import { cn } from '@/_utils'

export function CenterMenu({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null)
    return (
        <div
            className={cn(
                'fixed top-4 inset-x-0 max-w-xl mx-auto z-50',
                className,
            )}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Bakery">
                    <div className="backdrop-blur-md text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Bakery"
                            href="https://algochurn.com"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Submit your own cakes to compete in TopCakes"
                        />
                    </div>
                </MenuItem>
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Leaderboards"
                >
                    <div className="backdrop-blur-md text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Leaderboard"
                            href="https://algochurn.com"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="The leaderboard for TopCakes"
                        />
                    </div>
                </MenuItem>
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="How It Works"
                >
                    <div className="backdrop-blur-md text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="How It Works"
                            href="https://algochurn.com"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Submit your own cakes to compete in TopCakes"
                        />
                    </div>
                </MenuItem>
            </Menu>
        </div>
    )
}
