import { AuthButton } from '@/app/_components/auth-button/AuthButton'
import { Wallet } from 'lucide-react'

export const ConnectNow = () => {
    // Render
    return (
        <div className="text-center py-12">
            <Wallet className="mx-auto h-12 w-12 text-[#65c3c8] mb-4" />
            <h2 className="text-2xl font-bold text-[#261230] mb-4">
                Sign up for free to start baking
            </h2>
            <p className="text-[#261230] mb-6">
                To start baking your delicious cake, sign up / sign in first.
                It&apos;ll just take a second. We promise.
            </p>
            <AuthButton />
        </div>
    )
}
