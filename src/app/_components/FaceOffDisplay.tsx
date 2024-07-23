'use client'

import { Cake, CakeCard } from './cake-card/CakeCard'
import { useState } from 'react'

export const FaceOffDisplay = ({
    battleCakes,
}: Readonly<{ battleCakes: Cake[] }>) => {
    // State
    const [cakes, setCakes] = useState<Cake[]>(battleCakes)

    // Render
    return (
        <div className="flex items-center justify-center w-full max-w-7xl mx-auto gap-x-8">
            <CakeCard
                cake={cakes[0]}
                cakeIdx={0}
                opposingCakeId={cakes[1].id}
                setCakes={setCakes}
            />
            <div>VS</div>
            <CakeCard
                cake={cakes[1]}
                cakeIdx={1}
                opposingCakeId={cakes[0].id}
                setCakes={setCakes}
            />
        </div>
    )
}
