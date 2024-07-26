'use server'

import { api } from '@/clients'
import { getLeaderboardCakes as RouteSpec } from '@/server'

export const getLeaderboardCakes = async ({
    limit,
    offset,
}: {
    limit: number
    offset: number
}) => {
    try {
        const response = await api<typeof RouteSpec>().cakes.leaderboard.$get({
            query: {
                limit: String(limit),
                offset: String(offset),
            },
        })
        const { data, error } = await response.json()
        if (error) {
            throw new Error()
        }

        const { leaderboardCakes, nextOffset, hasMore } = data

        return {
            leaderboardCakes,
            nextOffset,
            hasMore,
        }
    } catch (error) {
        throw new Error(
            `error in client.getLeaderBoardCakes: ${JSON.stringify(error)}`,
        )
    }
}
