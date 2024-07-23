import { CenterMenu } from './CenterMenu'
import { Logo } from './Logo'
import { Signup } from './Signup'

export const Navbar = () => {
    return (
        <div className="flex h-20 items-center justify-between w-full max-w-7xl mx-auto">
            <Logo />
            <CenterMenu />
            <Signup />
        </div>
    )
}
