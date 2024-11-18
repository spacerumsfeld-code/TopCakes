'use server'

import { client as api } from '@/clients/api.client'
import { CakeGridView } from './CakeGrid.view'
import { CakeFilter, CakeGridPage, CakeSort } from '@/domain/cake/cake.models'
import { getUserAddress } from '@/app/data'

export const getBakeryCakes = async (
    page: CakeGridPage,
    args: {
        limit: number
        offset: number
        filter: CakeFilter
        sort: CakeSort
    },
) => {
    try {
        const response = await api.cake.getBakeryCakes.$get(args)
        const {
            data: { cakes, hasMore, nextOffset },
        } = await response.json()

        const component = (
            <CakeGridView
                page={page}
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

export const getCakesByAddress = async (
    page: CakeGridPage,
    args: {
        limit: number
        offset: number
        filter: CakeFilter
        sort: CakeSort
    },
) => {
    try {
        const { address } = await getUserAddress()
        if (!address) {
            return { component: null }
        }

        const response = await api.cake.getCakesByAddress.$get({
            address,
            limit: args.limit,
            offset: args.offset,
            filter: args.filter,
            sort: args.sort,
        })
        const {
            data: { cakes, nextOffset, hasMore },
        } = await response.json()

        const component = (
            <CakeGridView
                page={page}
                nextOffset={nextOffset}
                cakes={cakes!}
                hasMore={hasMore}
            />
        )

        return { component }
    } catch (error) {
        console.error(error)
        throw new Error(`error in client.getCakesByAddress: ${error}`)
    }
}

export const getFavoriteCakes = async (
    page: CakeGridPage,
    args: {
        limit: number
        offset: number
        filter: CakeFilter
        sort: CakeSort
    },
) => {
    try {
        const { address } = await getUserAddress()
        if (!address) {
            return { component: null }
        }

        const response = await api.cake.getFavoriteCakes.$get({
            address,
            limit: args.limit,
            offset: args.offset,
            filter: args.filter,
            sort: args.sort,
        })
        const {
            data: { cakes, nextOffset, hasMore },
        } = await response.json()

        const component = (
            <CakeGridView
                page={page}
                nextOffset={nextOffset}
                cakes={cakes!}
                hasMore={hasMore}
            />
        )

        return { component }
    } catch (error) {
        console.error(error)
        throw new Error(`error in client.getFavoriteCakes: ${error}`)
    }
}
