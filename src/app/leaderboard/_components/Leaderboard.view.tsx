'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/ui/components/table'
import { Trophy } from 'lucide-react'
import { useState } from 'react'
import { getLeaderboardCakes } from '../data'
import useLoading from '@/hooks/useLoading.hook'
import useIntersectionObserver from '@/hooks/useIntersectionObserver.hook'
import { useRouter } from 'next/navigation'
import { Cake } from '@/domain/cake/cake.models'

export const LeaderboardView = (props: {
    cakes: Cake[]
    limit: number
    offset: number
}) => {
    // @State
    const [localCakes, setLocalCakes] = useState<Cake[]>(props.cakes)
    const [localOffset, setLocalOffset] = useState<number>(props.offset)
    const [localHasMore, setLocalHasMore] = useState<boolean>(true)
    const { isLoading, startLoading, stopLoading } = useLoading()

    // @Interactivity
    const router = useRouter()

    const { ref } = useIntersectionObserver({
        triggerOnce: false,
        shouldUpdate: Boolean(localHasMore && !isLoading('leaderboardCakes')),
        onChange: async (inView: boolean) => {
            if (inView) {
                startLoading('leaderboardCakes')
                const { cakes, nextOffset, hasMore } =
                    await getLeaderboardCakes({
                        limit: props.limit,
                        offset: localOffset + props.limit,
                    })
                stopLoading('leaderboardCakes')

                setLocalCakes((prev) => [...prev, ...cakes!])
                setLocalOffset(nextOffset)
                setLocalHasMore(hasMore)
            }
        },
    })

    // @Render
    return (
        <div className="min-h-screen bg-[#faf7f5]">
            <main>
                <section className="py-10 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[50px]">
                                        Rank
                                    </TableHead>
                                    <TableHead>Cake</TableHead>
                                    <TableHead>Cake Type</TableHead>
                                    <TableHead className="text-right">
                                        Wins
                                    </TableHead>
                                    {/* <TableHead className="text-right">
                                        Price (ETH)
                                    </TableHead> */}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {localCakes.map((cake, index) => (
                                    <TableRow
                                        id="test-leaderboard-row"
                                        key={cake.id}
                                        className="cursor-pointer"
                                        onClick={() =>
                                            router.push(`/cake/${cake.id}`)
                                        }
                                    >
                                        <TableCell className="font-medium">
                                            <div className="flex items-center">
                                                <span className="mr-2">
                                                    {index + 1}
                                                </span>
                                                {index === 0 && (
                                                    <Trophy className="text-[#FFD700]" />
                                                )}
                                                {index === 1 && (
                                                    <Trophy className="text-[#C0C0C0]" />
                                                )}
                                                {index === 2 && (
                                                    <Trophy className="text-[#CD7F32]" />
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-semibold text-[#261230]">
                                            {cake.name}
                                        </TableCell>
                                        <TableCell>{cake.type}</TableCell>
                                        <TableCell className="text-right">
                                            {cake.wins}
                                        </TableCell>
                                        {/* <TableCell className="text-right">
                                            Placeholder
                                        </TableCell> */}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div ref={ref} />
                    </div>
                </section>
            </main>
        </div>
    )
}
