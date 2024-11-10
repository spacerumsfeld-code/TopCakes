'use server'

import { client as api } from '@/clients/api.client'
import { Cake } from '@/domain/cake'
import { CakeType } from '@/domain/cake/cake.models'
import { redirect } from 'next/navigation'

export const createCake = async ({
    address,
    cakeName,
    cakeType,
    cakeDescription,
    recipe,
    ingredients,
    imageUrl,
}: {
    address: string
    cakeName: string
    cakeType: CakeType
    cakeDescription: string
    recipe: string[]
    ingredients: { name: string; quantity: number; unit: string }[]
    imageUrl: string
}) => {
    try {
        await api.cake.createCake.$post({
            ownerAddress: address,
            name: cakeName,
            type: cakeType,
            description: cakeDescription,
            recipe,
            ingredients,
            imageUrl,
        })
    } catch (error) {
        throw new Error(`error in client.createCake: ${JSON.stringify(error)}`)
    }

    redirect('/?toast=cake-created')
}

export const generatePresignedUrl = async () => {
    try {
        const response = await api.file.generatePresignedUrl.$get()
        const {
            data: { url },
        } = await response.json()

        return { url }
    } catch (error) {
        throw new Error(
            `error in client.generatePresignedUrl: ${JSON.stringify(error)}`,
        )
    }
}
