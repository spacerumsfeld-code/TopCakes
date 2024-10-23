'use server'

import { api } from '@/clients'

export const getCakeById = async (id: number) => {
    try {
        const response = await api.cake.getCakeById.$get({
            id,
        })
        const {
            data: { cake },
        } = await response.json()

        return { cake }
    } catch (error) {
        throw new Error(`error in client.getCakeById: ${JSON.stringify(error)}`)
    }
}
