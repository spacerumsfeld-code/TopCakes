'use server'

import { VerifyLoginPayloadParams, createAuth } from 'thirdweb/auth'
import { web3Client } from '@/clients/web3.client'
import { privateKeyAccount } from 'thirdweb/wallets'
import { cookies } from 'next/headers'

const thirdwebAuth = createAuth({
    domain: process.env.WEB_URL!,
    client: web3Client,
    adminAccount: privateKeyAccount({
        client: web3Client,
        privateKey: process.env.THIRDWEB_ADMIN_PRIVATE_KEY!,
    }),
})

export const generatePayload = thirdwebAuth.generatePayload

export async function login(payload: VerifyLoginPayloadParams) {
    const verifiedPayload = await thirdwebAuth.verifyPayload(payload)
    if (verifiedPayload.valid) {
        const jwt = await thirdwebAuth.generateJWT({
            payload: verifiedPayload.payload,
        })
        cookies().set('jwt', jwt)
    }
}

export async function isLoggedIn() {
    const jwt = cookies().get('jwt')
    if (!jwt?.value) {
        return false
    }

    const authResult = await thirdwebAuth.verifyJWT({ jwt: jwt.value })
    return authResult.valid
}

export async function logout() {
    cookies().delete('jwt')
}
