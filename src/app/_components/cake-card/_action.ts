'use server'

import { api } from '@/clients'

export const submitVote = async ({
    cakeId,
    opposingCakeId,
}: {
    cakeId: number
    opposingCakeId: number
}) => {
    try {
        const [_, randomCakeResponse] = await Promise.all([
            api.battle.create.$post({
                cake1Id: cakeId,
                cake2Id: opposingCakeId,
                winnerId: cakeId,
            }),
            api.cake.getRandomCake.$get({
                cakeId,
            }),
        ])
        const { data } = await randomCakeResponse.json()

        return {
            newBattleCake: data!,
        }
    } catch (error) {
        throw new Error(`error in client.submitVote: ${JSON.stringify(error)}`)
    }
}
