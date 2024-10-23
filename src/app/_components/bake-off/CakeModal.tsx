'use client'

import React from 'react'
import { Modal, ModalBody, ModalContent, ModalTrigger } from '@/ui/Modal'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Cake as CakeLogo, Trophy, UtensilsCrossed } from 'lucide-react'
import { Cake } from '@/models/cake.interface'

export function CakeModal({
    children,
    cake,
}: {
    children: React.ReactNode
    cake: Cake
}) {
    return (
        <Modal>
            <ModalTrigger className="bg-[#65c3c8] text-white flex justify-center items-center px-4 py-2 rounded-md hover:bg-[#42b2b8] transition duration-300 group/modal-btn">
                {children}
            </ModalTrigger>
            <ModalBody className="bg-[#faf7f5] dark:bg-[#261230] text-[#261230] dark:text-white">
                <ModalContent>
                    <h2 className="text-3xl font-bold text-center mb-6">
                        {cake.name}
                    </h2>
                    <div className="flex justify-center mb-8">
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                rotate: 2,
                            }}
                            className="rounded-xl p-1 bg-white dark:bg-[#42b2b8] border border-[#65c3c8] overflow-hidden shadow-lg"
                        >
                            <Image
                                src={cake.image_url}
                                alt={cake.name}
                                width={300}
                                height={300}
                                className="rounded-lg object-cover"
                            />
                        </motion.div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="flex items-center justify-center">
                            <CakeLogo className="mr-2 text-[#65c3c8] h-6 w-6" />
                            <span className="font-semibold">{cake.type}</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <Trophy className="mr-2 text-[#eeaf3a] h-6 w-6" />
                            <span className="font-semibold">
                                {cake.wins} Wins
                            </span>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-[#200f29] p-6 rounded-lg mb-8">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <UtensilsCrossed className="mr-2 text-[#65c3c8] h-5 w-5" />
                            Recipe
                        </h3>
                        <p className="whitespace-pre-line">{cake.recipe}</p>
                    </div>
                </ModalContent>
            </ModalBody>
        </Modal>
    )
}