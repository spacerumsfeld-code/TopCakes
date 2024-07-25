import { FaceOffDisplay } from './FaceOffDisplay'
import { api } from '@/clients/api.client'
import { getFaceoffCakes } from '@/server'

export const FaceOff = async () => {
    const response = await api<typeof getFaceoffCakes>().cakes.faceoff.$get()
    const { data } = await response.json()

    return <FaceOffDisplay battleCakes={data!} />
}
