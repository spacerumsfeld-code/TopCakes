import { BakeOffIntro } from './BakeOffIntro'
import { BakeOffAsync } from '../../_components/bake-off/BakeOff.async'
import { Suspense } from 'react'
import { JoinNowCTA } from '@/app/_components/JoinNowCTA'
import { BakeOffSkeleton } from '@/app/_components/bake-off/BakeOff.skeleton'

export const BakeOffPage = () => {
    return (
        <div className="min-h-screen bg-[#faf7f5]">
            <main>
                <BakeOffIntro />
                <Suspense fallback={<BakeOffSkeleton />}>
                    <BakeOffAsync />
                </Suspense>
                <JoinNowCTA />
            </main>
        </div>
    )
}
