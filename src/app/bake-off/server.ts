'use server'

import { api } from '@/clients'

export const getBakeOffCakes = async () => {
    try {
        const response = await api.cake.getBakeOffCakes.$get()
        const { data } = await response.json()

        return { cakes: data }
    } catch (error) {
        throw new Error(`error in client.getBakeOffCakes: ${error}`)
    }
}

export const submitVote = async ({
    cakeId,
    otherCakeId,
}: {
    cakeId: number
    otherCakeId: number
}) => {
    try {
        const [_, cakes] = await Promise.all([
            api.battle.create.$post({
                cake1Id: cakeId,
                cake2Id: otherCakeId,
                winnerId: cakeId,
            }),
            api.cake.getBakeOffCakes.$get(),
        ])
        const { data } = await cakes.json()

        return {
            newCakes: data,
        }
    } catch (error) {
        throw new Error(`error in client.submitVote: ${JSON.stringify(error)}`)
    }
}
