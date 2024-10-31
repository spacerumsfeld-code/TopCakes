import { getBakeryCakes } from '../data'

export const BakeryAsync = async (props: {
    args: {
        limit: number
        offset: number
    }
}) => {
    const { component } = await getBakeryCakes(props.args)

    return <>{component}</>
}
