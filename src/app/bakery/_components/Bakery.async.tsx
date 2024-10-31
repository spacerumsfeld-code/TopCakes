import { CakeFilter, CakeSort } from '@/domain/cake'
import { getBakeryCakes } from '../data'

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
