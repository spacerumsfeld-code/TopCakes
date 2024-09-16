import * as React from 'react'
import { Html, Button } from '@react-email/components'

export const MagicLinkEmail = (props: { magicLink: string }) => {
    const { magicLink } = props

    return (
        <Html lang="en">
            <Button href={magicLink}>Login</Button>
        </Html>
    )
}
