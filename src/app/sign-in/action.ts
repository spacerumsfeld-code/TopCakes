'use server'

import { redirect } from 'next/navigation'
import { api } from '@/clients/api.client'
import { postMagicLink as RouteSpec } from '@/server'

export const sendMagicLink = async ({
    recipientEmail,
}: {
    recipientEmail: string
}) => {
    const result = await api<typeof RouteSpec>().auth['magic-link'].$post({
        query: {
            email: recipientEmail,
        },
    })
    console.info('WHOA', result)

    return redirect('/?message=emailsent')
}
