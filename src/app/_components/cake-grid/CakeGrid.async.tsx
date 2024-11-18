import { getUserAddress } from '@/app/data'
import { getBakeryCakes, getCakesByAddress, getFavoriteCakes } from './data'
import { CakeFilter, CakeGridPage, CakeSort } from '@/domain/cake/cake.models'

export const CakeGridAsync = async (props: {
    page: CakeGridPage
    args: { limit: number; offset: number; filter: CakeFilter; sort: CakeSort }
}) => {
    switch (props.page) {
        case CakeGridPage.Bakery:
            const { component: bakeryComponent } = await getBakeryCakes(
                props.page,
                props.args,
            )
            return <>{bakeryComponent}</>
        case CakeGridPage.MyCakes:
            const { address } = await getUserAddress()
            if (!address) {
                return null
            }
            const revisedArgs = {
                ...props.args,
                address,
            }
            const { component: myCakesComponent } = await getCakesByAddress(
                props.page,
                revisedArgs,
            )
            return <>{myCakesComponent}</>
        case CakeGridPage.Favorites:
            const { component: favoritesComponent } = await getFavoriteCakes(
                props.page,
                props.args,
            )
            return <>{favoritesComponent}</>
        default:
            return null
    }
}
