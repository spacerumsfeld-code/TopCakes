'use server'

import { api } from '@/clients'
import { Resource } from 'sst'

console.info('testing one two three', Resource.Server.url)
export const getLeaderboardCakes = async ({
    limit,
    offset,
}: {
    limit: number
    offset: number
}) => {
    try {
        const response = await api.cake.getCakes.$get({
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
