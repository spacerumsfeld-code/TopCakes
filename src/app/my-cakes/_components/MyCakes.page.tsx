import { CakeGrid } from '@/app/_components/cake-grid/CakeGrid'
import { CakeGridPage } from '@/domain/cake/cake.models'

export const MyCakesPage = ({
    searchParams,
}: {
    searchParams: { [key: string]: string }
}) => {
    return <CakeGrid page={CakeGridPage.MyCakes} searchParams={searchParams} />
}
