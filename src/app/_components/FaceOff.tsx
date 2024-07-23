import { CakeCard } from './cake-card/CakeCard'
import { api } from '@/clients/api.client'

export const FaceOff = async () => {
    const response = await api.cakes.battle.$get()
    const { data } = await response.json()

    return (
        <div className="flex items-center justify-center w-full max-w-7xl mx-auto gap-x-8">
            <CakeCard cake={data![0]} opposingCakeId={data![1].id} />
            <div>VS</div>
            <CakeCard cake={data![1]} opposingCakeId={data![0].id} />
        </div>
    )
}
