import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/ui/components/card'
import { getCakeById } from '../data'
import Link from 'next/link'
import { JoinNowCTA } from '@/app/_components/JoinNowCTA'
import { cn, tempLinkAsButtonClassName } from '@/lib'

// @TODO: After we implement the cake creation process, work out the "isVisitor the owner" logic. This lets us know to display:
// if cake is not NFT, "Mint NFT" functionality.
// if cake is NFT but no listing, "Make for Sale" or "Create Listing" or "whatever the fuck get money"
// if visitor is not owner and !listing, "make offer" is present since that is a thing with ERC721 contracts.
// if visitor is not owner and !listing, "buy now" or "bid".
// if visitor is not owner and not logged in (no address present), open log in functionality with Connect

export const CakePage = async (props: { params: { id: string } }) => {
    // Data
    const { cake } = await getCakeById(Number(props.params.id))

    // Render
    return (
        <div className="min-h-screen bg-[#faf7f5]">
            <main className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-[#261230] mb-8">
                        {cake.name}
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-2">
                            <Image
                                src={cake.imageUrl}
                                alt={cake.name}
                                width={500}
                                height={500}
                                className="rounded-lg shadow-lg"
                            />
                            <Card className="bg-white shadow-lg">
                                <CardContent className="p-6">
                                    <h2 className="text-2xl font-semibold text-[#261230] mb-4">
                                        Ownership Details
                                    </h2>
                                    <div className="space-y-2">
                                        <p>
                                            <span className="font-semibold">
                                                Token ID:
                                            </span>{' '}
                                            3
                                        </p>
                                        <p>
                                            <span className="font-semibold">
                                                Token Standard:
                                            </span>{' '}
                                            ERC721
                                        </p>
                                        <p>
                                            <span className="font-semibold">
                                                Chain:
                                            </span>{' '}
                                            Ethereum
                                        </p>
                                        <p>
                                            <span className="font-semibold">
                                                Owner:
                                            </span>{' '}
                                            0xxxnm922392302390x0x0x0
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="space-y-6">
                            <Card className="bg-white shadow-lg">
                                <CardContent className="p-6">
                                    <h2 className="text-2xl font-semibold text-[#261230] mb-4">
                                        Details
                                    </h2>
                                    <div className="space-y-2">
                                        <p>
                                            <span className="font-semibold">
                                                Type:
                                            </span>{' '}
                                            {cake.type}
                                        </p>
                                        <p>
                                            <span className="font-semibold">
                                                Description:
                                            </span>{' '}
                                            {cake.description}
                                        </p>
                                        <p>
                                            <span className="font-semibold">
                                                Wins:
                                            </span>{' '}
                                            {cake.wins}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-white shadow-lg mb-12">
                                <CardContent className="p-6">
                                    <ol className="list-decimal list-inside space-y-2">
                                        {cake.recipe.map((step, index) => (
                                            <li
                                                key={index}
                                                className="text-[#261230]"
                                            >
                                                {step}
                                            </li>
                                        ))}
                                    </ol>
                                </CardContent>
                            </Card>
                            <Card className="bg-white shadow-lg">
                                <CardContent className="p-6">
                                    <h2 className="text-2xl font-semibold text-[#261230] mb-4">
                                        Actions
                                    </h2>
                                    <div className="flex flex-col space-y-4">
                                        <Link
                                            href=""
                                            className={cn(
                                                tempLinkAsButtonClassName,
                                                ' bg-[#eeaf3a] hover:bg-[#e09915] text-[#261230]',
                                            )}
                                        >
                                            Make an Offer
                                        </Link>
                                        <Link
                                            href=""
                                            className={cn(
                                                tempLinkAsButtonClassName,
                                                ' bg-[#ef9fbc] hover:bg-[#e7739e] text-white',
                                            )}
                                        >
                                            Mint NFT
                                        </Link>
                                        <Link
                                            href=""
                                            className={cn(
                                                tempLinkAsButtonClassName,
                                                ' bg-[#65c3c8] hover:bg-[#42b2b8] text-white',
                                            )}
                                        >
                                            Create Listing
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <JoinNowCTA />
            </main>
        </div>
    )
}
