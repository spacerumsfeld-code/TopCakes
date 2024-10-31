'use server'

import { client as api } from '@/clients/api.client'

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
        const {
            data: { cakes, nextOffset, hasMore },
        } = await response.json()

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
