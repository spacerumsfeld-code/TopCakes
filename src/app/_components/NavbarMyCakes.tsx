'use client'

import Link from 'next/link'
import { useActiveAccount } from 'thirdweb/react'

export const MyCakesLink = () => {
    const account = useActiveAccount()

    if (!account) return <></>

    return (
        <Link href="/my-cakes" className="text-[#261230] hover:text-[#65c3c8]">
            My Cakes
        </Link>
    )
}
