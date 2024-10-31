'use server'

import { client as api } from '@/clients/api.client'

export const getSampleCakes = async () => {
    try {
        const response = await api.cake.getSampleCakes.$get()
        const {
            data: { cakes },
        } = await response.json()

        return { cakes }
    } catch (error) {
        throw new Error(
            `Error in client.getSampleCakes: ${JSON.stringify(error)}`,
        )
    }
}
