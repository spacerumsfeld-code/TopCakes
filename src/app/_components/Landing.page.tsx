// @TODO: Ensure mobile compatibility

import { Button } from '@/ui/components/button'
import { ChevronRight } from 'lucide-react'
import { Suspense } from 'react'
import { BakeOffAsync } from './bake-off/BakeOff.async'
import Image from 'next/image'
import { cn, tempLinkAsButtonClassName } from '@/lib'
import Link from 'next/link'
import { SampleCakes } from './sample-cakes/SampleCakes'
import { BakeOffSkeleton } from './bake-off/BakeOff.skeleton'

export const LandingPage = () => {
    return (
        <div className="min-h-screen bg-[#faf7f5]">
            <main>
                <section className="py-20 text-center">
                    <h1 className="text-5xl font-extrabold text-[#261230] mb-4">
                        Welcome to TopCak.es
                    </h1>
                    <p className="text-xl text-[#261230] mb-8">
                        Create, Battle, and Share Delicious Cake Creations!
                    </p>
                    <Link
                        href="/create-cake"
                        className={cn(
                            tempLinkAsButtonClassName,
                            'bg-[#eeaf3a] hover:bg-[#e09915] text-[#261230]',
                        )}
                    >
                        Start Baking
                    </Link>
                </section>

                <section id="create" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-[#261230] text-center mb-12">
                            Showcase Your Cakes
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <Image
                                    src="/landingCakeOne.jpg"
                                    width="400"
                                    height="400"
                                    alt="Cake Example"
                                    className="rounded-lg shadow-2xl"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-[#261230] mb-4">
                                    Share Your Delicious Creations
                                </h3>
                                <p className="text-lg text-gray-700 mb-6">
                                    Upload your most mouthwatering cake photos
                                    or cherished recipes. Join our community of
                                    passionate bakers and cake enthusiasts!
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        'Easy creation process',
                                        'Showcase your baking skills',
                                        'Engage with fellow cake lovers',
                                        'Earn royalties on your creations',
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center"
                                        >
                                            <ChevronRight className="h-6 w-6 text-[#65c3c8] mr-2" />
                                            <span className="text-gray-800">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="bg-[#ef9fbc] hover:bg-[#e7739e] text-white">
                                    Start Creating
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 text-center">
                    <h1 className="text-5xl font-extrabold text-[#261230] mb-4">
                        Bake-off
                    </h1>
                    <p className="text-xl text-[#261230]">
                        Vote for your favorite cake and watch it rise to the
                        top!
                    </p>
                </section>

                <Suspense fallback={<BakeOffSkeleton />}>
                    <BakeOffAsync />
                </Suspense>

                <SampleCakes />
            </main>
        </div>
    )
}
