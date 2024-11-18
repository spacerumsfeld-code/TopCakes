'use server'

import { client as api } from '@/clients/api.client'
import { web3Client } from '@/clients/web3.client'
import { cookies } from 'next/headers'
import { createAuth } from 'thirdweb/auth'
import { privateKeyAccount } from 'thirdweb/wallets'
import { cache as dedupe } from 'react'

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

const thirdwebAuth = createAuth({
    domain: process.env.WEB_URL!,
    client: web3Client,
    adminAccount: privateKeyAccount({
        client: web3Client,
        privateKey: process.env.THIRDWEB_ADMIN_PRIVATE_KEY!,
    }),
})

export const getUserAddress = dedupe(async () => {
    const jwt = cookies().get('jwt')
    if (!jwt?.value) {
        return { address: null }
    }

    const authResult = await thirdwebAuth.verifyJWT({ jwt: jwt.value })
    if (!authResult.valid) {
        return { address: null }
    }
    return { address: authResult.parsedJWT.sub }
})
