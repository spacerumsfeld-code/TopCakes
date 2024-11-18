'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/ui/components/select'
import { useRouter } from 'next/navigation'
import { ArrowDownWideNarrow, Sliders } from 'lucide-react'
import {
    CakeFilter,
    CakeSort,
    CakeFilterReverseMapping,
} from '@/domain/cake/cake.models'

export const CakeGridFilters = (props: {
    activeFilter: CakeFilter
    activeSort: CakeSort
}) => {
    // @Interactivity
    const router = useRouter()

    const handleFilterChange = (filter: CakeFilter) => {
        router.push(
            `/bakery?filter=${CakeFilterReverseMapping[filter]}&sort=${props.activeSort}`,
        )
    }
    const handleSortChange = (sort: CakeSort) => {
        router.push(`/bakery?filter=${props.activeFilter}&sort=${sort}`)
    }

    // @Render
    return (
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <div className="flex items-center gap-4">
                <ArrowDownWideNarrow className="h-4 w-4" />
                <Select
                    onValueChange={(value) =>
                        handleSortChange(value as CakeSort)
                    }
                    value={props.activeSort}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.values(CakeSort).map((sort) => (
                            <SelectItem key={sort} value={sort}>
                                {sort}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="flex items-center gap-4">
                <Sliders className="h-4 w-4" />
                <Select
                    onValueChange={(value) =>
                        handleFilterChange(value as CakeFilter)
                    }
                    value={props.activeFilter}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by rating" />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.values(CakeFilter).map((sort) => (
                            <SelectItem key={sort} value={sort}>
                                {sort}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
