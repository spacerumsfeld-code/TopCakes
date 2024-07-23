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

export function SummaryModal({
    children,
    cake,
}: {
    children: React.ReactNode
    cake: Cake
}) {
    return (
        <Modal>
            <ModalTrigger className="group/modal-btn">{children}</ModalTrigger>
            <ModalBody>
                <ModalContent>
                    <h4 className="text-lg md:text-2xl  text-neutral-100 font-bold text-center mb-8">
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
                            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
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
                    <div>Ingredients</div>
                    <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                        {cake.ingredients.map((ingredient) => (
                            <div
                                key={ingredient}
                                className="flex  items-center justify-center"
                            >
                                <span className=" text-neutral-300 text-sm">
                                    {ingredient}
                                </span>
                            </div>
                        ))}
                    </div>
                </ModalContent>
                <ModalFooter className="gap-4">
                    <button className="px-2 py-1   bg-black dark:border-black text-white border border-gray-300 rounded-md text-sm w-28">
                        Cancel
                    </button>
                    <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                        Vote Now
                    </button>
                </ModalFooter>
            </ModalBody>
        </Modal>
    )
}
