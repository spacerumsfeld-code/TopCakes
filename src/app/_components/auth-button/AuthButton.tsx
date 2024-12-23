'use client'

import { ConnectButton } from 'thirdweb/react'
import { lightTheme } from 'thirdweb/react'
import { createWallet, inAppWallet } from 'thirdweb/wallets'
import { web3Client } from '@/clients/web3.client'
import { sepolia, ethereum } from 'thirdweb/chains'
import { generatePayload, isLoggedIn, login, logout } from './data'

export const wallets = [
    inAppWallet({
        auth: {
            options: ['google', 'facebook', 'coinbase', 'apple', 'email'],
        },
    }),
    createWallet('io.metamask'),
    createWallet('com.coinbase.wallet'),
    createWallet('com.binance'),
    createWallet('com.crypto'),
]

export const AuthButton = () => {
    return (
        <ConnectButton
            client={web3Client}
            chain={process.env.NEXT_PUBLIC_IS_LOCAL! ? sepolia : ethereum}
            wallets={wallets}
            theme={lightTheme({
                colors: {
                    modalBg: '#faf7f5',
                    borderColor: '#e7e2df',
                    accentText: '#65c3c8',
                    separatorLine: '#e7e2df',
                    tertiaryBg: '#efeae6',
                    skeletonBg: '#e7e2df',
                    primaryText: '#261260',
                    primaryButtonBg: '#42b2b8',
                    primaryButtonText: '#ffffff',
                    secondaryButtonBg: '#ffffff',
                },
            })}
            connectButton={{
                label: 'Sign up',
                style: { height: 40, minWidth: 100 },
            }}
            connectModal={{
                size: 'compact',
                showThirdwebBranding: false,
            }}
            auth={{
                isLoggedIn: async () => {
                    return await isLoggedIn()
                },
                doLogin: async (params) => {
                    await login(params)
                },
                getLoginPayload: async ({ address }) =>
                    generatePayload({ address }),
                doLogout: async () => {
                    await logout()
                },
            }}
        />
    )
}
