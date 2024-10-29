import { getBakeOffCakes } from '../../bake-off/data'
import { BakeOffView } from './BakeOff.view'

export const BakeOffAsync = async () => {
    const { cakes } = await getBakeOffCakes()

    return <BakeOffView cakes={cakes!} />
}
