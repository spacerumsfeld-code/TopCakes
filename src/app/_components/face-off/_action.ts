'use server'

import { api } from '@/clients'

export const getFaceoffCakes = async () => {
    try {
        const response = await api.cake.getFaceoffCakes.$get()
        const { data } = await response.json()

        return { faceOffCakes: data }
    } catch (error) {
        throw new Error(`error in client.getFaceoffCakes: ${error}`)
    }
}
