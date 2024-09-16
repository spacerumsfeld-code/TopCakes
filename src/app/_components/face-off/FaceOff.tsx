import { FaceOffDisplay } from './FaceOffDisplay'
import { getFaceoffCakes } from './_action'

export const FaceOff = async () => {
    const { faceOffCakes } = await getFaceoffCakes()

    return <FaceOffDisplay battleCakes={faceOffCakes} />
}
