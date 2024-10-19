import { getBakeOffCakes } from '../../bake-off/server'
import { BakeOffView } from './BakeOff.view'

export const BakeOffAsync = async () => {
    const { cakes } = await getBakeOffCakes()

    return <BakeOffView cakes={cakes!} />
}
