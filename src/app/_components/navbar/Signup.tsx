import { MagicButton } from '@/ui/MagicButton'

const signUpAction = async () => {
    'use server'
    console.info('yahooooo')
}

export const Signup = () => {
    return <MagicButton clickAction={signUpAction}>Sign up</MagicButton>
}
