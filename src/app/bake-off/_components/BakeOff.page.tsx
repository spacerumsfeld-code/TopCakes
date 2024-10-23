import { BakeOffIntro } from './BakeOffIntro'
import { BakeOffAsync } from '../../_components/bake-off/BakeOff.async'
import { Suspense } from 'react'
import { JoinNowCTA } from '@/app/_components/JoinNowCTA'

export const BakeOffPage = () => {
    return (
        <div className="min-h-screen bg-[#faf7f5]">
            <main>
                <BakeOffIntro />
                <Suspense fallback={<div>Loading...</div>}>
                    <BakeOffAsync />
                </Suspense>
                <JoinNowCTA />
            </main>
        </div>
    )
}
