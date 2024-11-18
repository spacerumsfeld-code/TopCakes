import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/components/card'
import { Button } from '@/ui/components/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/ui/components/tooltip'
import { getCakeById } from '../data'
import { JoinNowCTA } from '@/app/_components/JoinNowCTA'
import { Trophy, CakeSlice, ChefHat, Share2 } from 'lucide-react'
import { cn, tempLinkAsButtonClassName } from '@/lib'
import { CakeLike } from './CakeLike'
import { CakeFavorite } from './CakeFavorite'

export const CakePage = async (props: { params: { id: string } }) => {
    const { cake } = await getCakeById(Number(props.params.id))

    return (
        <div className="min-h-screen">
            <main className="py-6 px-4 sm:py-12 sm:px-6 lg:px-8 bg-[#faf7f5]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                        <div className="lg:col-span-2 space-y-6 lg:space-y-8">
                            <div>
                                <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral mb-4 leading-tight">
                                    {cake.name}
                                </h1>
                            </div>
                            <div className="relative">
                                <Image
                                    src={cake.imageUrl}
                                    alt={cake.name}
                                    width={400}
                                    height={400}
                                    className="rounded-lg shadow-lg w-full object-contain bg-white"
                                />
                                <div className="absolute top-2 right-2 flex gap-2">
                                    <CakeLike cakeId={cake.id} />
                                    <CakeFavorite cakeId={cake.id} />
                                    <Button
                                        className="bg-white text-[#65c3c8] hover:bg-[#65c3c8] hover:text-white hover:scale-105 transition-all"
                                        aria-label="Share this cake"
                                    >
                                        <Share2 className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>

                            <p className="text-lg text-neutral-content leading-relaxed">
                                {cake.description}
                            </p>

                            <Card className="bg-white shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-2xl font-bold">
                                        <ChefHat className="text-[#eeaf3a] mr-2" />
                                        Recipe
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ol className="list-decimal list-inside space-y-2">
                                        {cake.recipe.map((step, index) => (
                                            <li
                                                key={index}
                                                className="text-neutral text-base"
                                            >
                                                {step}
                                            </li>
                                        ))}
                                    </ol>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-6 lg:space-y-8">
                            <Card className="bg-white shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-xl font-semibold">
                                        <Trophy className=" text-[#ef9fbc] mr-2" />
                                        Stats
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <p className="text-sm">
                                        <span className="font-medium">
                                            Type:
                                        </span>{' '}
                                        {cake.type}
                                    </p>
                                    <p className="text-sm">
                                        <span className="font-medium">
                                            Wins:
                                        </span>{' '}
                                        {cake.wins}
                                    </p>
                                    <p className="text-sm">
                                        <span className="font-medium">
                                            Likes:
                                        </span>{' '}
                                        {cake.likes}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-white shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-xl font-semibold">
                                        <CakeSlice className="text-[#65c3c8] mr-2" />
                                        {cake.isNFT
                                            ? 'NFT Details'
                                            : 'Ownership'}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <p className="text-sm">
                                        <span className="font-medium">
                                            Owner:
                                        </span>{' '}
                                        <Link
                                            href={`https://etherscan.io/address/${cake?.ownerAddress}`}
                                            target="_blank"
                                            className="text-[#65c3c8] hover:text-[#42b2b8] line-clamp"
                                        >
                                            {cake?.ownerAddress}
                                        </Link>
                                    </p>
                                    {cake.isNFT ? (
                                        <>
                                            <p className="text-sm">
                                                <span className="font-medium">
                                                    Token ID:
                                                </span>{' '}
                                                {cake.ownerAddress}
                                            </p>
                                            <p className="text-sm">
                                                <span className="font-medium">
                                                    Token Standard:
                                                </span>{' '}
                                                ERC-721
                                            </p>
                                            <p className="text-sm">
                                                <span className="font-medium">
                                                    Chain:
                                                </span>{' '}
                                                Ethereum
                                            </p>
                                        </>
                                    ) : (
                                        <p className="text-sm text-neutral-content">
                                            This cake has not been minted as an
                                            NFT yet.
                                        </p>
                                    )}
                                </CardContent>
                            </Card>

                            <Card className="bg-white shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">
                                        Actions
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2 flex flex-col">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href=""
                                                    className={cn(
                                                        tempLinkAsButtonClassName,
                                                        'bg-[#ef9fbc] hover:bg-[#e7739e] text-white font-medium',
                                                    )}
                                                >
                                                    Mint NFT
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="text-sm">
                                                    Turn your cake into a unique
                                                    digital asset!
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href=""
                                                    className={cn(
                                                        tempLinkAsButtonClassName,
                                                        'bg-[#65c3c8] hover:bg-[#42b2b8] text-white font-medium',
                                                    )}
                                                >
                                                    Request NFT Mint
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="text-sm">
                                                    Let the owner know you want
                                                    to see this cake as an NFT!
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link
                                                    href=""
                                                    className={cn(
                                                        tempLinkAsButtonClassName,
                                                        'bg-[#eeaf3a] hover:bg-[#e09915] text-[#261230] font-medium',
                                                    )}
                                                >
                                                    Make Offer
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="text-sm">
                                                    Make an offer to purchase
                                                    this cake NFT!
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <JoinNowCTA />
        </div>
    )
}

export default CakePage
