import { CakeGridPage } from '@/domain/cake/cake.models'

export const CakeGridHeader = (props: { page: CakeGridPage }) => {
    let title: string
    let description: string

    switch (props.page) {
        case CakeGridPage.Bakery:
            title = 'Bakery'
            description = 'Discover and collect the sweetest digital cakes!'
            break
        case CakeGridPage.MyCakes:
            title = 'My Cakes'
            description = 'Your cakes'
            break
        case CakeGridPage.Favorites:
            title = 'Favorites'
            description = 'Your favorite cakes'
            break
        default:
            title = ''
            description = ''
            break
    }

    return (
        <section className="py-20 text-center bg-[#faf7f5]">
            <h1 className="text-5xl font-extrabold text-[#261230] mb-4">
                {title}
            </h1>
            <p className="text-xl text-[#261230]">{description}</p>
        </section>
    )
}
