'use client'

import { Cake } from '@/app/_components/cake-card/CakeCard'
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from '@/ui/elements/table'
import { useState } from 'react'
import { LoadMore } from './LoadMore'
import { TableItem } from './TableItem'

export const LeaderboardDisplay = ({ cakes }: { cakes: Cake[] }) => {
    // State
    const [cakesToDisplay, setCakesToDisplay] = useState<Cake[]>(cakes)
    const [offset, setOffset] = useState(20)
    const [hasMore, setHasMore] = useState(true)

    return (
        <>
            <Table dense>
                <TableHead>
                    <TableRow>
                        <TableHeader>Rank</TableHeader>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Type</TableHeader>
                        <TableHeader>Wins</TableHeader>
                        <TableHeader>Losses</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cakesToDisplay.map((cake, index) => (
                        <TableItem key={cake.id} cake={cake} index={index} />
                    ))}
                </TableBody>
            </Table>
            {hasMore && (
                <LoadMore
                    offset={offset}
                    setOffset={setOffset}
                    setCakesToDisplay={setCakesToDisplay}
                    setHasMore={setHasMore}
                />
            )}
        </>
    )
}
