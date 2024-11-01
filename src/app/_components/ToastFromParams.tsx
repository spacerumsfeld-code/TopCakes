'use client'

import { useSearchParams } from 'next/navigation'
import { toast } from 'sonner'
import { useEffect } from 'react'

export const ToastFromParams = () => {
    /** State */
    const searchParams = useSearchParams()
    const message = searchParams?.get('toast') ?? ''

    /** Interactivity */
    useEffect(() => {
        switch (message) {
            case 'cake-created':
                toast.success('Cake created!')
                break
            default:
                break
        }
    }, [message])

    /** Render */
    return <></>
}
