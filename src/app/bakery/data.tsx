'use server'

import { client as api } from '@/clients/api.client'
import { BakeryView } from './_components/Bakery.view'
import { CakeFilter, CakeSort } from '@/domain/cake'

export const getBakeryCakes = async (args: {
    limit: number
    offset: number
    filter: CakeFilter
    sort: CakeSort
}) => {
    try {
        const response = await api.cake.getBakeryCakes.$get(args)
        const {
            data: { cakes, hasMore, nextOffset },
        } = await response.json()

        const component = (
            <BakeryView
                nextOffset={nextOffset}
                cakes={cakes!}
                hasMore={hasMore}
            />
        )

        return { component }
    } catch (error) {
        throw new Error(`error in client.getBakeryCakes: ${error}`)
    }
}
