import Image from 'next/image'

export const Logo = () => {
    return (
        <Image
            src={'/topCakesLogo.png'}
            height="100"
            width="100"
            alt="logo"
            className="bg-black"
        />
    )
}
