'use client'

// @TODO: Implement newsletter signup. Probably Resend, but we'll see. Make signup a server action so we dont need useClient
// @TODO: Ensure mobile compatibility

import { Button } from '@/ui/components/button'
import { Input } from '@/ui/components/input'
import { useState } from 'react'

export const Newsletter = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Signed up with:', email)
        setEmail('')
    }

    return (
        <section className="py-20 bg-[#faf7f5]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-[#261230] mb-8">
                    Join Our Sweet Community
                </h2>
                <p className="text-lg text-[#261230] mb-8">
                    Stay updated with the latest cake creations, battle results,
                    and marketplace trends!
                </p>
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
                        Subscribe
                    </Button>
                </form>
            </div>
        </section>
    )
}
