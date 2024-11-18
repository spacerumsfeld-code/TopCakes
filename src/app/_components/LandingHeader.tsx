import { cn, tempLinkAsButtonClassName } from '@/lib'
import Link from 'next/link'

export const LandingHeader = () => {
    return (
        <section className="py-20 text-center">
            <h1 className="text-5xl font-extrabold text-[#261230] mb-4">
                Welcome to TopCak.es
            </h1>
            <p className="text-xl text-[#261230] mb-8">
                Create, Battle, and Share Delicious Cakes!
            </p>
            <Link
                href="/info/how-it-works"
                className={cn(
                    tempLinkAsButtonClassName,
                    'bg-[#eeaf3a] hover:bg-[#e09915] text-[#261230]',
                )}
            >
                How it Works
            </Link>
        </section>
    )
}
