import { FaceOffDisplay } from './FaceOffDisplay'
import { api } from '@/clients/api.client'

export const FaceOff = async () => {
    const response = await api.cakes.battle.$get()
    const { data } = await response.json()

    return <FaceOffDisplay battleCakes={data!} />
}
