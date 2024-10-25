import { cn, tempLinkAsButtonClassName } from '@/lib'
import { Card, CardContent } from '@/ui/components/card'
import { Skeleton } from '@/ui/components/skeleton'
import { Trophy } from 'lucide-react'
import Link from 'next/link'

export const BakeOffSkeleton = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-[#efeae6] to-[#e7e2df]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <Card className="bg-white shadow-xl">
                        <CardContent className="p-6 text-center">
                            <Skeleton className="w-full h-[300px] rounded-lg bg-[#65c3c8]/10 mb-4" />
                            <Skeleton className="h-6 w-3/4 mx-auto mb-2 bg-[#261230]/10" />
                            <Skeleton className="h-4 w-full mx-auto mb-4 bg-[#261230]/10" />
                            <Skeleton className="h-10 w-24 mx-auto mb-4 bg-[#eeaf3a]/20" />
                            <Skeleton className="h-10 w-full bg-[#eeaf3a]/20" />
                        </CardContent>
                    </Card>

                    <div className="text-center">
                        <Trophy className="h-20 w-20 text-[#65c3c8] mx-auto mb-4" />
                        <p className="text-2xl font-bold text-[#261230]">VS</p>
                    </div>

                    <Card className="bg-white shadow-xl">
                        <CardContent className="p-6 text-center">
                            <Skeleton className="w-full h-[300px] rounded-lg bg-[#65c3c8]/10 mb-4" />
                            <Skeleton className="h-6 w-3/4 mx-auto mb-2 bg-[#261230]/10" />
                            <Skeleton className="h-4 w-full mx-auto mb-4 bg-[#261230]/10" />
                            <Skeleton className="h-10 w-24 mx-auto mb-4 bg-[#eeaf3a]/20" />
                            <Skeleton className="h-10 w-full bg-[#eeaf3a]/20" />
                        </CardContent>
                    </Card>
                </div>
                <div className="text-center mt-8">
                    <Link
                        href="/leaderboard"
                        className={cn(
                            tempLinkAsButtonClassName,
                            'bg-[#ef9fbc] hover:bg-[#e7739e] text-white',
                        )}
                    >
                        View Leaderboard
                    </Link>
                </div>
            </div>
        </section>
    )
}
