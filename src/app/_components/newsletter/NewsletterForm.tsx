'use client'

import { Button } from '@/ui/components/button'
import { Input } from '@/ui/components/input'
import { useState } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'
import { subscribeToNewsletter } from './data'
import useLoading from '@/hooks/useLoading.hook'
import { ButtonLoader } from '@/ui/ButtonLoader'

const newsLetterSchema = z.object({
    email: z.string().email(),
})

export const NewsletterForm = () => {
    const [email, setEmail] = useState('')
    const { isLoading, startLoading, stopLoading } = useLoading()
    const [alreadySubscribed, setAlreadySubscribed] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (alreadySubscribed) {
            toast.info('You are already subscribed!')
            return
        }

        const isValid = newsLetterSchema.safeParse({
            email,
        })
        if (!isValid.success) {
            toast.error('Please provide a valid email')
            return
        }

        startLoading('subscribeToNewsletter')
        await subscribeToNewsletter(email)
        stopLoading('subscribeToNewsletter')

        setEmail('')
        toast.success('Subscribed!')
        setAlreadySubscribed((_prev) => true)
    }

    return (
        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
            <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow mr-2"
                required
            />
            <Button
                type="submit"
                className="bg-[#eeaf3a] hover:bg-[#e09915] text-[#261230]"
            >
                {isLoading('subscribeToNewsletter') ? (
                    <ButtonLoader />
                ) : (
                    'Subscribe'
                )}
            </Button>
        </form>
    )
}
