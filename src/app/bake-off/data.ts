'use server'

import { client as api } from '@/clients/api.client'

export const getBakeOffCakes = async () => {
    try {
        const response = await api.cake.getBakeOffCakes.$get()
        const {
            data: { cakes },
        } = await response.json()

        return { cakes }
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
        const [_, getCakesResponse] = await Promise.all([
            api.battle.create.$post({
                cake1Id: cakeId,
                cake2Id: otherCakeId,
                winnerId: cakeId,
            }),
            api.cake.getBakeOffCakes.$get(),
        ])
        const {
            data: { cakes },
        } = await getCakesResponse.json()

        return {
            newCakes: cakes,
        }
    } catch (error) {
        throw new Error(`error in client.submitVote: ${JSON.stringify(error)}`)
    }
}
