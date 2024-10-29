'use server'

import { api } from '@/clients'
import { CakeType } from '@/domain'
import { redirect } from 'next/navigation'

export const createCake = async ({
    cakeName,
    cakeType,
    cakeDescription,
    recipe,
    ingredients,
    imageUrl,
}: {
    cakeName: string
    cakeType: CakeType
    cakeDescription: string
    recipe: string[]
    ingredients: { name: string; quantity: number; unit: string }[]
    imageUrl: string
}) => {
    try {
        const response = await api.cake.createCake.$post({
            name: cakeName,
            type: cakeType,
            description: cakeDescription,
            recipe,
            ingredients,
            imageUrl,
        })
        const { data } = await response.json()
        const { success } = data

        redirect('/')
    } catch (error) {
        console.error(error)
        throw new Error(`error in client.createCake: ${JSON.stringify(error)}`)
    }
}

export const generatePresignedUrl = async () => {
    try {
        const response = await api.file.generatePresignedUrl.$get()
        const {
            data: { url },
        } = await response.json()

        return { url }
    } catch (error) {
        console.error(error)
        throw new Error(
            `error in client.generatePresignedUrl: ${JSON.stringify(error)}`,
        )
    }
}
