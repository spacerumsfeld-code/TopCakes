import { CakeFilter, CakeSort } from '@/domain/cake'
import { useSearchParams } from 'next/navigation'
import { useActiveAccount } from 'thirdweb/react'
import { getCakesByAddress } from '../data'
import { useState } from 'react'
import { MyCakesView } from './MyCakes.view'
import { Button } from '@/ui/components/button'

export const LoadMore = (props: { nextOffset: number }) => {
    // @State
    const [shouldRender, setShouldRender] = useState<boolean>(false)
    const searchParams = useSearchParams()
    const filter =
        CakeFilter[searchParams?.get('filter') as keyof typeof CakeFilter] ??
        CakeFilter.None
    const sort =
        CakeSort[searchParams?.get('sort') as keyof typeof CakeSort] ??
        CakeSort.None

    const account = useActiveAccount()

    const myCakesPromise = getCakesByAddress({
        address: account!.address,
        limit: 28,
        offset: props.nextOffset,
        filter,
        sort,
    })

    return (
        <>
            {shouldRender ? (
                <MyCakesView myCakesPromise={myCakesPromise} />
            ) : (
                <div className="flex flex-col mx-auto gap-y-2 w-full items-center py-8">
                    <span>See more cakes!</span>
                    <Button
                        className="bg-[#65c3c8] hover:bg-[#42b2b8] text-white"
                        onClick={() => setShouldRender(true)}
                    >
                        <div>Load More</div>
                    </Button>
                </div>
            )}
        </>
    )
}
