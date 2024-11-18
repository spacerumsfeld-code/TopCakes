import { CakeFilter, CakeGridPage, CakeSort } from '@/domain/cake/cake.models'
import { CakeGridFilters } from './CakeGridFilters'
import { Suspense } from 'react'
import { CakeGridSkeleton } from './CakeGrid.skeleton'
import { CakeGridAsync } from './CakeGrid.async'
import { CakeGridHeader } from './CakeGridHeader'

export const CakeGrid = (props: {
    page: CakeGridPage
    searchParams: { [key: string]: string }
}) => {
    const args = {
        limit: 28,
        offset: 0,
        filter:
            CakeFilter[props.searchParams?.filter as keyof typeof CakeFilter] ??
            CakeFilter.None,
        sort:
            CakeSort[props.searchParams?.sort as keyof typeof CakeSort] ??
            CakeSort.None,
    }

    return (
        <>
            <CakeGridHeader page={props.page} />
            <div className="min-h-screen">
                <main>
                    <section className="py-10 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <CakeGridFilters
                                activeFilter={args.filter}
                                activeSort={args.sort}
                            />
                            <Suspense
                                key={args.offset}
                                fallback={<CakeGridSkeleton />}
                            >
                                <CakeGridAsync page={props.page} args={args} />
                            </Suspense>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}
