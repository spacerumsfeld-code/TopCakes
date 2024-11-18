import { Suspense } from 'react'
import Link from 'next/link'
import { cn, tempLinkAsButtonClassName } from '@/lib'
import { CakeCards } from './CakeCards'
import { SampleCakesSkeleton } from './SampleCakes.skeleton'

export const SampleCakes = () => {
    return (
        <section id="marketplace" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-[#261230] text-center mb-12">
                    From the Bakery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Suspense fallback={<SampleCakesSkeleton />}>
                        <CakeCards />
                    </Suspense>
                </div>
                <div className="text-center mt-12">
                    <Link
                        href="/bakery"
                        className={cn(
                            tempLinkAsButtonClassName,
                            'bg-[#ef9fbc] hover:bg-[#e7739e]  text-white',
                        )}
                    >
                        Explore Bakery
                    </Link>
                </div>
            </div>
        </section>
    )
}
