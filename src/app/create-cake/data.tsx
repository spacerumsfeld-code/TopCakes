'use server'

import { client as api } from '@/clients/api.client'
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
        await api.cake.createCake.$post({
            name: cakeName,
            type: cakeType,
            description: cakeDescription,
            recipe,
            ingredients,
            imageUrl,
        })

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
