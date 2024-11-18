'use client'

import { Button } from '@/ui/components/button'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { getBakeryCakes, getCakesByAddress } from './data'
import { Loader2 } from 'lucide-react'
import { CakeFilter, CakeGridPage, CakeSort } from '@/domain/cake/cake.models'

export const LoadMore = (props: { nextOffset: number; page: CakeGridPage }) => {
    // @State
    const [component, setComponent] = useState<JSX.Element | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const params = useSearchParams()
    const filter =
        CakeFilter[params.get('filter') as keyof typeof CakeFilter] ??
        CakeFilter.None
    const sort =
        CakeSort[params.get('sort') as keyof typeof CakeSort] ?? CakeSort.Wins

    const args = {
        limit: 28,
        offset: props.nextOffset,
        filter,
        sort,
    }

    // @Interactivity
    const handleLoadMore = async () => {
        setIsLoading(true)
        switch (props.page) {
            case CakeGridPage.Bakery:
                const { component: bakeryComponent } = await getBakeryCakes(
                    props.page,
                    args,
                )
                setComponent(bakeryComponent)
                break
            case CakeGridPage.MyCakes:
                const { component: myCakeComponent } = await getCakesByAddress(
                    props.page,
                    args,
                )
                setComponent(myCakeComponent)
                break
            default:
                break
        }
        setIsLoading(false)
    }

    // @Render
    return (
        <>
            {component ? (
                <div className="mt-8">{component}</div>
            ) : (
                <div className="flex flex-col mx-auto gap-y-2 w-full items-center py-8">
                    {(() => {
                        switch (props.page) {
                            case CakeGridPage.Bakery:
                                return <span>See more cakes!</span>
                            default:
                                return <span>See more cakes!</span>
                        }
                    })()}
                    <Button
                        className="bg-[#65c3c8] hover:bg-[#42b2b8] text-white"
                        onClick={() => handleLoadMore()}
                    >
                        {isLoading ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <div>Load More</div>
                        )}
                    </Button>
                </div>
            )}
        </>
    )
}
