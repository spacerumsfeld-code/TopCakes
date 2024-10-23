'use client'

import { Button } from '@/ui/components/button'

export const BakeOffCTA = () => {
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
                <Button
                    size="lg"
                    className="bg-[#65c3c8] hover:bg-[#e7739e] text-white"
                >
                    Start Baking
                </Button>
            </div>
        </section>
    )
}
