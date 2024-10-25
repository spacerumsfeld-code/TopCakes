import { Card, CardContent } from '@/ui/components/card'
import { Skeleton } from '@/ui/components/skeleton'

export const SampleCakesSkeleton = () => {
    // Render
    return (
        <>
            {[...Array(4)].map((_, index) => (
                <Card
                    key={index}
                    className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                    <Skeleton className="w-full h-48 bg-[#65c3c8]/10" />
                    <CardContent className="p-4">
                        <Skeleton className="h-6 w-3/4 mb-2 bg-[#261230]/10" />
                        <div className="flex justify-between items-center">
                            <Skeleton className="h-10 w-20 bg-[#65c3c8]/20" />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </>
    )
}
