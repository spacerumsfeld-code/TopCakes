'use server'

import { client as api } from '@/clients/api.client'
import { CakeFilter, CakeSort } from '@/domain/cake'

export const getCakesByAddress = async ({
    address,
    limit,
    offset,
    filter,
    sort,
}: {
    address: string
    limit: number
    offset: number
    filter: CakeFilter
    sort: CakeSort
}) => {
    try {
        const response = await api.cake.getCakesByAddress.$get({
            address,
            limit,
            offset,
            filter,
            sort,
        })
        const {
            data: { cakes, nextOffset, hasMore },
        } = await response.json()

        return { cakes, nextOffset, hasMore }
    } catch (error) {
        console.error(error)
        throw new Error(`error in client.getCakesByAddress: ${error}`)
    }
}
