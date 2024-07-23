'use server'

import { api } from '@/clients/api.client'

export const submitVote = async ({
    cakeId,
    opposingCakeId,
}: {
    cakeId: number
    opposingCakeId: number
}) => {
    try {
        const response = await api.battle.$post({
            json: {
                cake1Id: cakeId,
                cake2Id: opposingCakeId,
                winnerId: cakeId,
            },
        })
        const { error } = await response.json()

        if (error) {
            throw new Error(error.message)
        }
    } catch (error) {
        throw new Error(`error in client.submitVote: ${JSON.stringify(error)}`)
    }
}
