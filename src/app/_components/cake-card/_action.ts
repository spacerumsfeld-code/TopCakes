'use server'

import { api } from '@/clients/api.client'
import { getRandomCake, postBattle } from '@/server'

export const submitVote = async ({
    cakeId,
    opposingCakeId,
}: {
    cakeId: number
    opposingCakeId: number
}) => {
    try {
        await api<typeof postBattle>().battle.$post({
            json: {
                cake1Id: cakeId,
                cake2Id: opposingCakeId,
                winnerId: cakeId,
            },
        })

        const newBattleCake = await api<
            typeof getRandomCake
        >().cakes.random.$get({
            query: {
                cakeId: String(cakeId),
            },
        })
        const { data } = await newBattleCake.json()

        return {
            newBattleCake: data!,
        }
    } catch (error) {
        throw new Error(`error in client.submitVote: ${JSON.stringify(error)}`)
    }
}
