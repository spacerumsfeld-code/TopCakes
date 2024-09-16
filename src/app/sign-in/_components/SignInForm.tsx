'use client'

import { sendMagicLink } from '../action'
import { Input } from '@/ui/elements/input'

export const SignInForm = () => {
    // Interactivity
    const handleSubmit = async (formData: FormData) => {
        const email = formData.get('email')
        await sendMagicLink({ recipientEmail: email as string })
    }

    // Render
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action={handleSubmit} className="space-y-6">
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-white"
                    >
                        Email address
                    </label>
                    <div className="mt-2">
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-[#8A2BE2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Sign in
                    </button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-400">
                Not a member?{' '}
                <a
                    href="#"
                    className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
                >
                    Start a 14 day free trial
                </a>
            </p>
        </div>
    )
}
