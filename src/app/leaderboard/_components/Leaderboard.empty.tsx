import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/ui/components/table'
import { Skeleton } from '@/ui/components/skeleton'
import { Trophy } from 'lucide-react'

export const LeaderboardSkeleton = ({
    rowCount = 10,
}: {
    rowCount?: number
}) => {
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
                                    <TableHead className="text-right">
                                        Price (ETH)
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Array.from({ length: rowCount }).map(
                                    (_, index) => (
                                        <TableRow key={index}>
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
                                                <Skeleton className="h-5 w-28" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="h-5 w-24" />
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Skeleton className="h-5 w-8 ml-auto" />
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Skeleton className="h-5 w-20 ml-auto" />
                                            </TableCell>
                                        </TableRow>
                                    ),
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </section>
            </main>
        </div>
    )
}
