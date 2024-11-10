'use server'

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
