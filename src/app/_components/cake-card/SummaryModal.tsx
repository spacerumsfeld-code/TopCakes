'use client'

import React from 'react'
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from '@/ui/Modal'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Cake } from './CakeCard'
import { submitVote } from './_action'

export function SummaryModal({
    children,
    cake,
    opposingCakeId,
}: {
    children: React.ReactNode
    cake: Cake
    opposingCakeId: number
}) {
    // Interactivity
    const handleSubmitVote = async () => {
        await submitVote({ cakeId: cake.id, opposingCakeId })
    }

    // Render
    return (
        <Modal>
            <ModalTrigger className="group/modal-btn">{children}</ModalTrigger>
            <ModalBody>
                <ModalContent className="flex flex-col gap-y-8">
                    <h4 className="text-lg md:text-2xl  text-gray-900 font-bold text-center mb-8">
                        {cake.name}
                    </h4>
                    <div className="flex justify-center items-center">
                        <motion.div
                            style={{
                                rotate: Math.random() * 20 - 10,
                            }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 0,
                                zIndex: 100,
                            }}
                            whileTap={{
                                scale: 1.1,
                                rotate: 0,
                                zIndex: 100,
                            }}
                            className="rounded-xl -mr-4 mt-4 p-1 bg-[#FFB6C1] border flex-shrink-0 overflow-hidden"
                        >
                            <Image
                                src={cake.image_url}
                                alt="cake image"
                                width="600"
                                height="600"
                                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                            />
                        </motion.div>
                    </div>
                    <div className="text-gray-900">Ingredients</div>
                    <div className=" grid grid-cols-3 gap-x-4 gap-y-4 items-start justify-start max-w-sm">
                        {cake.ingredients.map((ingredient) => (
                            <div key={ingredient}>
                                <span className=" text-gray-900 text-sm">
                                    {ingredient}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="text-gray-900">Recipe</div>
                </ModalContent>
                <ModalFooter className="gap-4">
                    <button
                        onClick={() => handleSubmitVote()}
                        className="bg-black text-white text-sm px-2 py-1 rounded-md border border-black w-28"
                    >
                        Vote Now
                    </button>
                </ModalFooter>
            </ModalBody>
        </Modal>
    )
}
