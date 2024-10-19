import { BakeOffIntro } from './BakeOffIntro'
import { BakeOffAsync } from '../../_components/bake-off/BakeOff.async'
import { BakeOffCTA } from './BakeOffCTA'
import { Suspense } from 'react'

export const BakeOffPage = () => {
    return (
        <div className="min-h-screen bg-[#faf7f5]">
            <main>
                <BakeOffIntro />
                <Suspense fallback={<div>Loading...</div>}>
                    <BakeOffAsync />
                </Suspense>
                <BakeOffCTA />
            </main>
        </div>
    )
}
