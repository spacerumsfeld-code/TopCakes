import { MagicButton } from '@/ui/MagicButton'
import Link from 'next/link'

export const Signup = () => {
    return (
        <Link href="/sign-in">
            <MagicButton>Sign up</MagicButton>
        </Link>
    )
}
