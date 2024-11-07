'use server'

import { client as api } from '@/clients/api.client'

export const subscribeToNewsletter = async (email: string) => {
    try {
        await api.notification.subscribeToNewsletter.$post({
            email,
        })
    } catch (error) {
        throw new Error(`error in client.subscribeToNewsletter: ${error}`)
    }
}
