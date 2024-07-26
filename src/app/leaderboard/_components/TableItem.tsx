'use client'

import Image from 'next/image'
import React, { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutsideClick } from '@/hooks/useClickOutside.hook'
import { Cake } from '@/app/_components/cake-card/CakeCard'
import { Badge } from '@/ui/elements/badge'
import { TableCell, TableRow } from '@/ui/elements/table'

export const TableItem = ({ cake, index }: { cake: Cake; index: number }) => {
    // State
    const [active, setActive] = useState<Cake | boolean | null>(null)
    const ref = useRef<HTMLDivElement>(null)
    const id = useId()

    // Interactivity
    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setActive(false)
            }
        }

        if (active && typeof active === 'object') {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [active])

    useOutsideClick(ref, () => setActive(null))

    // Render
    return (
        <>
            {/* ???? */}
            <AnimatePresence>
                {active && typeof active === 'object' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>

            {/* Popped modal */}
            <AnimatePresence>
                {active && typeof active === 'object' ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.name}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>

                        <motion.div
                            layoutId={`card-${active.name}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.name}-${id}`}>
                                <Image
                                    priority
                                    width={200}
                                    height={200}
                                    src={active.image_url}
                                    alt={active.name}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div>
                                <div className="flex flex-col justify-between items-start p-4">
                                    <motion.h3
                                        layoutId={`title-${active.name}-${id}`}
                                        className="font-bold text-lg text-neutral-700 dark:text-neutral-200"
                                    >
                                        {active.name}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${active.type}-${id}`}
                                        className="text-neutral-600 dark:text-neutral-400"
                                    >
                                        <Badge color="emerald">
                                            {cake.type}
                                        </Badge>
                                    </motion.p>
                                    <motion.p
                                        layoutId={`description-${active.description}-${id}`}
                                        className="text-neutral-600 dark:text-neutral-400"
                                    >
                                        {active.description}
                                    </motion.p>
                                    <div className="text-bold text-lg text-neutral-900">
                                        Ingredients
                                    </div>
                                    <div className=" grid grid-cols-3 gap-x-4 gap-y-4 items-start justify-start max-w-sm">
                                        {cake.ingredients.map((ingredient) => (
                                            <div key={ingredient}>
                                                <span className=" text-neutral-900 text-sm">
                                                    {ingredient}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-bold text-lg text-neutral-900">
                                        Recipe
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            {/* Table Item Display */}
            <TableRow key={cake.id} className="text-neutral-200">
                <TableCell className="text-neutral-200">{index + 1}</TableCell>
                <TableCell className="text-neutral-200">
                    <motion.div
                        layoutId={`card-${cake.name}-${id}`}
                        key={`card-${cake.name}-${id}`}
                        onClick={() => setActive(cake)}
                        className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col md:flex-row">
                            <motion.div layoutId={`image-${cake.name}-${id}`}>
                                <Image
                                    width={100}
                                    height={100}
                                    src={cake.image_url}
                                    alt={cake.name}
                                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                                />
                            </motion.div>

                            <motion.h3
                                layoutId={`title-${cake.name}-${id}`}
                                className="font-medium text-neutral-200 text-center md:text-left"
                            >
                                {cake.name}
                            </motion.h3>
                        </div>
                    </motion.div>
                </TableCell>
                <TableCell className="text-neutral-200">
                    <Badge color="emerald">{cake.type}</Badge>
                </TableCell>
                <TableCell className="text-neutral-200">{cake.wins}</TableCell>
                <TableCell className="text-neutral-200">
                    {cake.losses}
                </TableCell>
            </TableRow>
        </>
    )
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    )
}
