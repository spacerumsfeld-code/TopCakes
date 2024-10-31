'use client'

import { CakeFilter, CakeSort } from '@/domain/cake'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/ui/components/select'

export const BakeryFilters = (props: {
    activeFilter: CakeFilter
    activeSort: CakeSort
}) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex space-x-4 mb-4 md:mb-0">
                <Select
                    onValueChange={(value) =>
                        console.log(
                            'redirect to same page with current filters and selected sort applied',
                        )
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
                <Select
                    onValueChange={(value) =>
                        console.log(
                            'redirect to same page with current filters and this one one applied',
                        )
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
