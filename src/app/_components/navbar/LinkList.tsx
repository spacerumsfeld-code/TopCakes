import Link from 'next/link'

export const LinkList = () => {
    // @Render
    return (
        <div className="flex items-center gap-x-8 text-xl text-white">
            <Link href="/" className="hover:text-fuchsia-400">
                Home
            </Link>
            <Link href="/leaderboard" className="hover:text-fuchsia-400">
                Leaderboard
            </Link>
            <Link href="/about" className="hover:text-fuchsia-400">
                About
            </Link>
        </div>
    )
}
