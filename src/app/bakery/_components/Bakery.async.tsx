import { getBakeryCakes } from '../data'
import { CakeFilter, CakeSort } from '@/domain/cake/cake.models'

export const BakeryAsync = async (props: {
    args: {
        limit: number
        offset: number
        filter: CakeFilter
        sort: CakeSort
    }
}) => {
    const { component } = await getBakeryCakes(props.args)

    return <>{component}</>
}
