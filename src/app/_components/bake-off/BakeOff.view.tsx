'use client'

import { Button } from '@/ui/components/button'
import { Card, CardContent } from '@/ui/components/card'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { submitVote } from '@/app/bake-off/data'
import Image from 'next/image'
import { Cake } from '@/domain/cake'
import { CakeModal } from './CakeModal'
import Link from 'next/link'
import { cn, tempLinkAsButtonClassName } from '@/lib'

// @TODO: change size of skeleton to match size of card

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
                            <Card className="bg-white shadow-xl transition-all duration-300">
                                <CardContent className="p-6">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={leftCake.imageUrl}
                                        alt={leftCake.name}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    <h3 className="text-lg font-semibold text-[#261230] mb-2 truncate w-full">
                                        {leftCake.name}
                                    </h3>
                                    <CakeModal cake={leftCake}>
                                        Recipe
                                    </CakeModal>
                                    <Button
                                        onClick={() =>
                                            handleSubmitVote(leftCake.id)
                                        }
                                        className="mt-4 bg-[#eeaf3a] hover:bg-[#e09915] text-[#261230] w-full"
                                        disabled={winner !== null}
                                    >
                                        Vote
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    <div className="text-center">
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
                            <Card className="bg-white shadow-xl transition-all duration-300">
                                <CardContent className="p-6">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={rightCake.imageUrl}
                                        alt={rightCake.name}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    <h3 className="text-lg font-semibold text-[#261230] mb-2 truncate w-full">
                                        {rightCake.name}
                                    </h3>
                                    <CakeModal cake={rightCake}>
                                        Recipe
                                    </CakeModal>
                                    <Button
                                        onClick={() =>
                                            handleSubmitVote(rightCake.id)
                                        }
                                        className="mt-4 bg-[#eeaf3a] hover:bg-[#e09915] text-[#261230] w-full"
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
