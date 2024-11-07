import { Button } from '@/ui/components/button'
import { Card, CardContent } from '@/ui/components/card'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Cake } from '@/domain/cake'
import { cn } from '@/lib'
import { LoadMore } from './LoadMore'
import { BakeryEmptyState } from './Bakery.empty'

const getButtonColor = (index: number) => {
    const colors = [
        'bg-[#ef9fbc] hover:bg-[#e7739e] text-white',
        'bg-[#65c3c8] hover:bg-[#42b2b8] text-white',
        'bg-[#eeaf3a] hover:bg-[#e09915] text-[#261230]',
    ]

    return colors[index % colors.length]
}

export const BakeryView = (props: {
    cakes: Cake[]
    nextOffset: number
    hasMore: boolean
}) => {
    if (!props.cakes.length) return <BakeryEmptyState />

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {props.cakes.map((cake, index) => (
                    <Link href={`/cake/${cake.id}`} key={cake.id}>
                        <Card className="bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                            <CardContent className="p-6">
                                <Image
                                    width={300}
                                    height={300}
                                    src={cake.imageUrl}
                                    alt={cake.name}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-lg font-semibold text-[#261230] mb-2 truncate w-full">
                                    {cake.name}
                                </h3>
                                <h3
                                    data-testid="cake-type"
                                    className="text-sm text-gray-600 mb-4 line-clamp"
                                >
                                    {cake.type}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 line-clamp">
                                    {cake.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span
                                        data-testid="cake-wins"
                                        className="text-[#65c3c8]"
                                    >
                                        Wins: {cake.wins}
                                    </span>
                                </div>
                                <Button
                                    className={cn(
                                        getButtonColor(index),
                                        'w-full mt-4',
                                    )}
                                >
                                    <ShoppingBag className="h-4 w-4 mr-2" />
                                    Recipe
                                </Button>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
            {props.hasMore && <LoadMore nextOffset={props.nextOffset} />}
        </>
    )
}
