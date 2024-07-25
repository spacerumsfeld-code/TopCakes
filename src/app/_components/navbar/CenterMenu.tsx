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
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Leaderboards"
                >
                    <div className="backdrop-blur-md text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Leaderboard"
                            href={`${process.env.NEXT_PUBLIC_WEB_URL}/leaderboard`}
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="The best cakes in the world"
                        />
                    </div>
                </MenuItem>
            </Menu>
        </div>
    )
}
