import { Suspense } from 'react'
import { BakeOffAsync } from './bake-off/BakeOff.async'
import { SampleCakes } from './sample-cakes/SampleCakes'
import { BakeOffSkeleton } from './bake-off/BakeOff.skeleton'
import { LandingHeader } from './LandingHeader'
import { Showcase } from './Showcase'

export const LandingPage = async () => {
    return (
        <div className="min-h-screen bg-[#faf7f5]">
            <main>
                <LandingHeader />
                <Showcase />

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
