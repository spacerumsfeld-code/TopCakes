import { cn, tempLinkAsButtonClassName } from '@/lib'
import Link from 'next/link'

export const JoinNowCTA = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-[#261230] mb-8">
                    Ready to Join the Battle?
                </h2>
                <p className="text-lg text-[#261230] mb-8">
                    Bake your own cake and enter the bake-off, with the option
                    to earn royalties!
                </p>
                <Link
                    href="/create-cake"
                    className={cn(
                        tempLinkAsButtonClassName,
                        'bg-[#65c3c8] hover:bg-[#42b2b8] text-white',
                    )}
                >
                    Start Baking
                </Link>
            </div>
        </section>
    )
}
