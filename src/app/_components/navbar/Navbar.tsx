import { LinkList } from './LinkList'
import { Signup } from './Signup'

export const Navbar = () => {
    return (
        <div className="flex h-20 items-center justify-between w-full max-w-7xl mx-auto">
            <LinkList />
            <Signup />
        </div>
    )
}
