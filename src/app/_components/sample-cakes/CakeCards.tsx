import { getSampleCakes } from '@/app/data'
import { cn, tempLinkAsButtonClassName } from '@/lib'
import { Card, CardContent } from '@/ui/components/card'
import Link from 'next/link'
import Image from 'next/image'

export const CakeCards = async () => {
    // Data
    const { cakes } = await getSampleCakes()

    // Render
    return (
        <>
            {cakes!.map((cake, index) => (
                <Card
                    key={index}
                    className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                    <Image
                        height={300}
                        width={300}
                        src={cake.image_url}
                        alt={cake.name}
                        className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                        <h3 className="text-lg font-semibold text-[#261230] mb-2">
                            {cake.name}
                        </h3>
                        <div className="flex justify-between items-center">
                            <Link
                                href={`/cake/${cake.id}`}
                                className={cn(
                                    tempLinkAsButtonClassName,
                                    'bg-[#65c3c8] hover:bg-[#42b2b8] text-white',
                                )}
                            >
                                View
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </>
    )
}
