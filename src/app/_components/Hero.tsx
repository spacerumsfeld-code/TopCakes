import React from 'react'
import { Spotlight } from '@/ui/Spotlight'
import { FlipWords } from '@/ui/FlipWord'

const ROTATION_WORDS = ['delicious', 'scrumptious', 'perfect', 'wonderful']

export function Hero() {
    return (
        <>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="fuchsia"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Find the most
                    <br />
                    <FlipWords words={ROTATION_WORDS} />
                    <br />
                    cake in the world.
                </h1>
            </div>
        </>
    )
}
