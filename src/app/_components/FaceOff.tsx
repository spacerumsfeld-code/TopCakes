import { CakeCard } from './cake-card/CakeCard'
import { api } from '@/clients/api.client'

export const FaceOff = async () => {
    const data = await api.cakes.battle.$get()
    const { battleCakes } = await data.json()

    return (
        <div className="flex items-center justify-center w-full max-w-7xl mx-auto gap-x-8">
            <CakeCard cake={battleCakes[0]} />
            <div>VS</div>
            <CakeCard cake={battleCakes[1]} />
        </div>
    )
}
