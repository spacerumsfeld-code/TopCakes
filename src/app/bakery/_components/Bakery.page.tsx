'use client'

import { useState } from 'react'
import { Button } from '@/ui/components/button'
import { Card, CardContent } from '@/ui/components/card'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/ui/components/select'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { BakeryHeader } from './BakeryHeader'
import Image from 'next/image'

// @TODO: Create cake router method to get cakes here. Need it be different from leaderboard cakes?
// would be cool if not! But, there may be relevant differences that need to be displayed in the Bakery.
// @TODO: Incorporate Bakery Async and Bakery Display into page, suspense and all that.
// @TODO: Fix variable card size

// This would typically come from an API or database
const cakeData = [
    {
        id: 1,
        name: 'Triple Chocolate Delight',
        description: "A decadent chocolate lover's dream come true.",
        price: 0.5,
        rating: 4.8,
        wins: 15,
    },
    {
        id: 2,
        name: 'Strawberry Shortcake Dream',
        description: 'A light and fruity delight for strawberry enthusiasts.',
        price: 0.4,
        rating: 4.6,
        wins: 12,
    },
    {
        id: 3,
        name: 'Lemon Meringue Miracle',
        description: 'Tangy lemon curd topped with fluffy meringue peaks.',
        price: 0.45,
        rating: 4.7,
        wins: 10,
    },
    {
        id: 4,
        name: 'Red Velvet Royale',
        description: 'Smooth, rich, and topped with cream cheese frosting.',
        price: 0.55,
        rating: 4.9,
        wins: 20,
    },
    {
        id: 5,
        name: 'Matcha Green Tea Sensation',
        description: 'A unique blend of earthy matcha and sweet cream.',
        price: 0.5,
        rating: 4.5,
        wins: 8,
    },
    {
        id: 6,
        name: 'Caramel Macchiato Cake',
        description: 'Coffee-infused sponge with caramel buttercream.',
        price: 0.6,
        rating: 4.8,
        wins: 18,
    },
    {
        id: 7,
        name: 'Blueberry Cheesecake Bliss',
        description: 'Creamy cheesecake swirled with fresh blueberries.',
        price: 0.55,
        rating: 4.7,
        wins: 14,
    },
    {
        id: 8,
        name: 'Tiramisu Temptation',
        description: 'Classic Italian dessert in cake form.',
        price: 0.5,
        rating: 4.6,
        wins: 11,
    },
    {
        id: 9,
        name: 'Coconut Cream Paradise',
        description: 'Light coconut sponge with coconut cream frosting.',
        price: 0.45,
        rating: 4.5,
        wins: 9,
    },
    {
        id: 10,
        name: 'Salted Caramel Chocolate Fudge',
        description: 'Rich chocolate cake with salted caramel layers.',
        price: 0.65,
        rating: 4.9,
        wins: 22,
    },
    {
        id: 11,
        name: 'Vanilla Bean Dream',
        description: 'Moist vanilla cake with real vanilla bean specks.',
        price: 0.4,
        rating: 4.4,
        wins: 7,
    },
    {
        id: 12,
        name: 'Pistachio Rosewater Delight',
        description: 'Nutty pistachio cake with a hint of rosewater.',
        price: 0.7,
        rating: 4.8,
        wins: 16,
    },
]

export const BakeryPage = () => {
    const [displayedCakes, setDisplayedCakes] = useState(8)
    const [sortBy, setSortBy] = useState('name')
    const [filterRating, setFilterRating] = useState('all')

    const filteredAndSortedCakes = cakeData
        .filter(
            (cake) =>
                filterRating === 'all' ||
                cake.rating >= parseFloat(filterRating),
        )
        .sort((a, b) => {
            if (sortBy === 'name') return a.name.localeCompare(b.name)
            if (sortBy === 'price') return a.price - b.price
            if (sortBy === 'wins') return b.wins - a.wins
            return 0
        })

    const visibleCakes = filteredAndSortedCakes.slice(0, displayedCakes)

    const loadMore = () => {
        setDisplayedCakes((prev) => prev + 8)
    }

    return (
        <div className="min-h-screen bg-[#faf7f5]">
            <main>
                <BakeryHeader />
                <section className="py-10 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                            <div className="flex space-x-4 mb-4 md:mb-0">
                                <Select
                                    onValueChange={(value) => setSortBy(value)}
                                >
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Sort by" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="name">
                                            Name
                                        </SelectItem>
                                        <SelectItem value="price">
                                            Price
                                        </SelectItem>
                                        <SelectItem value="wins">
                                            Wins
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select
                                    onValueChange={(value) =>
                                        setFilterRating(value)
                                    }
                                >
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Filter by rating" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">
                                            All Ratings
                                        </SelectItem>
                                        <SelectItem value="4.5">
                                            4.5 and above
                                        </SelectItem>
                                        <SelectItem value="4.7">
                                            4.7 and above
                                        </SelectItem>
                                        <SelectItem value="4.9">
                                            4.9 and above
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {visibleCakes.map((cake) => (
                                <Link href={`/cake/${cake.id}`} key={cake.id}>
                                    <Card className="bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
                                        <CardContent className="p-6">
                                            <Image
                                                width={300}
                                                height={300}
                                                src={`/placeholder.svg?height=200&width=200&text=${cake.name}`}
                                                alt={cake.name}
                                                className="w-full h-48 object-cover rounded-lg mb-4"
                                            />
                                            <h3 className="text-lg font-semibold text-[#261230] mb-2">
                                                {cake.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-4">
                                                {cake.description}
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-[#261230] font-bold">
                                                    {cake.price} ETH
                                                </span>
                                                <span className="text-[#65c3c8]">
                                                    Wins: {cake.wins}
                                                </span>
                                            </div>
                                            <Button className="w-full mt-4 bg-[#eeaf3a] hover:bg-[#e09915] text-[#261230]">
                                                <ShoppingBag className="h-4 w-4 mr-2" />
                                                Buy Now
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                        {displayedCakes < filteredAndSortedCakes.length && (
                            <div className="text-center mt-8">
                                <Button
                                    onClick={loadMore}
                                    className="bg-[#65c3c8] hover:bg-[#42b2b8] text-white"
                                >
                                    Load More
                                </Button>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    )
}
