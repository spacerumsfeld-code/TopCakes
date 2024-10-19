'use server'

import { api } from '@/clients'

export const getLeaderboardCakes = async ({
    limit,
    offset,
}: {
    limit: number
    offset: number
}) => {
    try {
        const response = await api.cake.getLeaderboardCakes.$get({
            limit: String(limit),
            offset: String(offset),
        })
        const { data } = await response.json()
        const { cakes, nextOffset, hasMore } = data

        return {
            cakes,
            nextOffset,
            hasMore,
        }
    } catch (error) {
        throw new Error(
            `error in client.getLeaderBoardCakes: ${JSON.stringify(error)}`,
        )
    }
}
