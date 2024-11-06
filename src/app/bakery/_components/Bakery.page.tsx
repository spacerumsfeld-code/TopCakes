import { Suspense } from 'react'
import { BakeryAsync } from './Bakery.async'
import { BakeryHeader } from './BakeryHeader'
import { BakerySkeleton } from './Bakery.skeleton'
import { CakeFilter, CakeSort } from '@/domain/cake'
import { BakeryFilters } from './BakeryFilters'

export const BakeryPage = ({
    searchParams,
}: {
    searchParams: { [key: string]: string }
}) => {
    const filter =
        CakeFilter[searchParams?.filter as keyof typeof CakeFilter] ??
        CakeFilter.None
    const sort =
        CakeSort[searchParams?.sort as keyof typeof CakeSort] ?? CakeSort.None

    const getBakeryCakesArgs = {
        limit: 28,
        offset: 0,
        filter,
        sort,
    }

    return (
        <>
            <BakeryHeader />
            <div className="min-h-screen">
                <main>
                    <section className="py-10 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <BakeryFilters
                                activeFilter={filter}
                                activeSort={sort}
                            />
                            <Suspense
                                key={getBakeryCakesArgs.offset}
                                fallback={<BakerySkeleton />}
                            >
                                <BakeryAsync args={getBakeryCakesArgs} />
                            </Suspense>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
