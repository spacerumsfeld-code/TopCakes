'use client'

import { Cake } from '@/domain/cake'
import { Button } from '@/ui/components/button'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { getBakeryCakes } from '../data'
import { Loader2 } from 'lucide-react'
import { CakeFilter, CakeSort } from '@/domain/cake/cake.models'

export const LoadMore = (props: { nextOffset: number }) => {
    // @State
    const [component, setComponent] = useState<JSX.Element | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const params = useSearchParams()
    const filter =
        CakeFilter[params.get('filter') as keyof typeof CakeFilter] ??
        CakeFilter.None
    const sort =
        CakeSort[params.get('sort') as keyof typeof CakeSort] ?? CakeSort.Wins

    const getBakeryCakesArgs = {
        limit: 28,
        offset: props.nextOffset,
        filter,
        sort,
    }

    // @Interactivity
    const handleLoadMore = async () => {
        setIsLoading(true)
        const { component: CakeBlock } =
            await getBakeryCakes(getBakeryCakesArgs)
        setComponent(CakeBlock)
    }

    // @Render
    return (
        <>
            {component ? (
                <div className="mt-8">{component}</div>
            ) : (
                <div className="flex flex-col mx-auto gap-y-2 w-full items-center py-8">
                    <span>Keep Exploring the Bakery</span>
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
