'use client'

import { Button } from '@/ui/components/button'
import { Card, CardContent } from '@/ui/components/card'
import { AnimatePresence, motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { useState } from 'react'
import { submitVote } from '@/app/bake-off/server'
import Image from 'next/image'

import { Cake } from '@/models/cake.interface'
import { CakeModal } from './CakeModal'
import Link from 'next/link'
import { cn, tempLinkAsButtonClassName } from '@/lib'

export const BakeOffView = ({ cakes: initialCakes }: { cakes: Cake[] }) => {
    // State
    const [cakes, setCakes] = useState<Cake[]>(initialCakes)
    const [winner, setWinner] = useState<Cake | null>(null)
    const leftCake = cakes[0]
    const rightCake = cakes[1]

    // Interactivity
    const handleSubmitVote = async (winningCakeId: number) => {
        setWinner(cakes.find(({ id }) => id === winningCakeId)!)

        const { newCakes } = await submitVote({
            cakeId: winningCakeId,
            otherCakeId: cakes.find(({ id }) => id !== winningCakeId)!.id,
        })
        setWinner(null)
        setCakes(newCakes!)
    }

    // Render
    return (
        <section className="py-20 bg-gradient-to-r from-[#efeae6] to-[#e7e2df]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={leftCake.id}
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.7 }}
                            transition={{ duration: 1 }}
                        >
                            <Card className="bg-white shadow-xl">
                                <CardContent className="p-6 text-center">
                                    <Image
                                        src={leftCake.image_url}
                                        alt={leftCake.name}
                                        width={400}
                                        height={400}
                                        className="rounded-lg object-cover"
                                    />
                                    <h3 className="text-xl font-semibold text-[#261230] mb-2">
                                        {leftCake.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {leftCake.description}
                                    </p>
                                    <CakeModal cake={leftCake}>
                                        <Button>Recipe</Button>
                                    </CakeModal>
                                    <Button
                                        onClick={() =>
                                            handleSubmitVote(leftCake.id)
                                        }
                                        className="mt-4 bg-[#eeaf3a] hover:bg-[#e09915] text-[#261230]"
                                        disabled={winner !== null}
                                    >
                                        Vote
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    <div className="text-center">
                        <Trophy className="h-20 w-20 text-[#65c3c8] mx-auto mb-4" />
                        <p className="text-2xl font-bold text-[#261230]">VS</p>
                        <AnimatePresence mode="wait">
                            {winner && (
                                <motion.div
                                    key="winner"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="mt-4"
                                >
                                    <p className="text-lg font-semibold text-[#261230]">
                                        Winner!
                                    </p>
                                    <p className="text-xl text-[#65c3c8]">
                                        {winner.name}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={rightCake.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-white shadow-xl">
                                <CardContent className="p-6 text-center">
                                    <Image
                                        src={rightCake.image_url}
                                        alt={rightCake.name}
                                        width={400}
                                        height={400}
                                        className="rounded-lg object-cover"
                                    />
                                    <h3 className="text-xl font-semibold text-[#261230] mb-2">
                                        {rightCake.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {rightCake.description}
                                    </p>
                                    <CakeModal cake={rightCake}>
                                        <Button>Recipe</Button>
                                    </CakeModal>
                                    <Button
                                        onClick={() =>
                                            handleSubmitVote(rightCake.id)
                                        }
                                        className="mt-4 bg-[#eeaf3a] hover:bg-[#e09915] text-[#261230]"
                                        disabled={winner !== null}
                                    >
                                        Vote
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
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
