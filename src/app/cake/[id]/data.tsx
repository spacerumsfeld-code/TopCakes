'use server'

import { getUserAddress } from '@/app/data'
import { client as api } from '@/clients/api.client'

export const getCakeById = async (id: number) => {
    try {
        const response = await api.cake.getCakeById.$get({
            id,
        })
        const {
            data: { cake },
        } = await response.json()

        return { cake: cake! }
    } catch (error) {
        throw new Error(`error in client.getCakeById: ${JSON.stringify(error)}`)
    }
}

export const likeCake = async (id: number) => {
    try {
        const response = await api.cake.likeCake.$post({
            cakeId: id,
        })
        const {
            data: { success },
        } = await response.json()

        return { success }
    } catch (error) {
        throw new Error(`error in client.likeCake: ${JSON.stringify(error)}`)
    }
}

export const toggleCakeFavorite = async (id: number) => {
    try {
        const { address } = await getUserAddress()
        console.info(address)
        if (!address) return { success: false }

        const response = await api.cake.toggleCakeFavorite.$post({
            cakeId: id,
            address,
        })
        const {
            data: { success },
        } = await response.json()

        return { success }
    } catch (error) {
        throw new Error(`error in client.likeCake: ${JSON.stringify(error)}`)
    }
}
