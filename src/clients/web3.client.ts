import { createThirdwebClient } from 'thirdweb'

export const web3Client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRD_WEB_CLIENT_ID!,
})
