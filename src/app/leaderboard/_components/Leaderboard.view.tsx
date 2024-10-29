import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/ui/components/table'
import { Trophy } from 'lucide-react'
import { Cake } from '@/domain/cake.interface'

export const LeaderboardView = ({ cakes }: { cakes: Cake[] }) => {
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
                                {cakes.map((cake, index) => (
                                    <TableRow key={cake.id}>
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
                                        <TableCell className="text-right">
                                            Placeholder
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </section>
            </main>
        </div>
    )
}
