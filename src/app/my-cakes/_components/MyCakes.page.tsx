'use client'

import { Suspense, useEffect, useState } from 'react'
import { useActiveAccount } from 'thirdweb/react'
import { getCakesByAddress } from '../data'
import { Cake, CakeFilter, CakeSort } from '@/domain/cake'
import { MyCakesSkeleton } from './MyCakes.skeleton'
import { MyCakesView } from './MyCakes.view'
import { MyCakesHeader } from './MyCakesHeader'
import { BakeryFilters } from '@/app/bakery/_components/BakeryFilters'

// @TODO: I dont like this pattern one bit. Lets see if we can find an alternative.

export const MyCakesPage = ({
    searchParams,
}: {
    searchParams: { [key: string]: string }
}) => {
    const filter =
        CakeFilter[searchParams?.filter as keyof typeof CakeFilter] ??
        CakeFilter.None
    const sort =
        CakeSort[searchParams?.sort as keyof typeof CakeSort] ?? CakeSort.None
    const [myCakesPromise, setMyCakesPromise] = useState<
        | Promise<{
              cakes: Cake[] | null
              nextOffset: number
              hasMore: boolean
          }>
        | undefined
    >()

    const account = useActiveAccount()

    useEffect(() => {
        if (account) {
            setMyCakesPromise(
                getCakesByAddress({
                    address: account!.address,
                    limit: 28,
                    offset: 0,
                    filter,
                    sort,
                }),
            )
        }
    }, [account])

    return (
        <>
            <MyCakesHeader />
            <div className="min-h-screen">
                <main>
                    <section className="py-10 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <BakeryFilters
                                activeFilter={filter}
                                activeSort={sort}
                            />
                            <Suspense fallback={<MyCakesSkeleton />}>
                                <>
                                    {myCakesPromise ? (
                                        <MyCakesView
                                            myCakesPromise={myCakesPromise}
                                        />
                                    ) : (
                                        <MyCakesSkeleton />
                                    )}
                                </>
                            </Suspense>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
