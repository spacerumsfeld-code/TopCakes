import { AuthButton } from '@/app/_components/AuthButton'
import { Wallet } from 'lucide-react'

export const ConnectNow = () => {
    // Render
    return (
        <div className="text-center py-12">
            <Wallet className="mx-auto h-12 w-12 text-[#65c3c8] mb-4" />
            <h2 className="text-2xl font-bold text-[#261230] mb-4">
                Connect Your Wallet
            </h2>
            <p className="text-[#261230] mb-6">
                To start baking your delicious cake, please sign up / sign in
                first. It'll just take a moment. We promise.
            </p>
            <AuthButton />
        </div>
    )
}
