import { CakeGridPage } from '@/domain/cake/cake.models'
import { CakeGrid } from '@/app/_components/cake-grid/CakeGrid'

export const BakeryPage = ({
    searchParams,
}: {
    searchParams: { [key: string]: string }
}) => {
    return <CakeGrid page={CakeGridPage.Bakery} searchParams={searchParams} />
}
