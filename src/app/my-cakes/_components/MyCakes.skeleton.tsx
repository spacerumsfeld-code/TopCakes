import { Card, CardContent } from '@/ui/components/card'
import { Skeleton } from '@/ui/components/skeleton'

const MyCakesGridSkeleton = ({ count = 28 }: { count?: number }) => {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Array.from({ length: count }).map((_, index) => (
                        <Card key={index} className="bg-white shadow-xl">
                            <CardContent className="p-6">
                                <Skeleton className="w-full h-48 rounded-lg bg-[#65c3c8]/10 mb-4" />
                                <Skeleton className="h-6 w-3/4 mb-2 bg-[#261230]/10" />
                                <Skeleton className="h-4 w-full mb-4 bg-[#261230]/10" />
                                <div className="flex justify-between items-center mb-4">
                                    <Skeleton className="h-5 w-16 bg-[#261230]/10" />
                                    <Skeleton className="h-5 w-20 bg-[#65c3c8]/10" />
                                </div>
                                <Skeleton className="h-10 w-full bg-[#eeaf3a]/20" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Skeleton className="h-10 w-32 mx-auto bg-[#65c3c8]/20" />
                </div>
            </div>
        </section>
    )
}

export const MyCakesSkeleton = () => {
    return (
        <main>
            <MyCakesGridSkeleton />
        </main>
    )
}
