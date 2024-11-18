'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/ui/components/button'
import { Card, CardContent } from '@/ui/components/card'
import { Cake, Star, Gift, Coins } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib'

export const HowItWorksPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#faf7f5] to-white">
            <main className="overflow-hidden">
                {/* Hero Section */}
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl font-extrabold text-[#261230] sm:text-5xl md:text-6xl mb-6">
                            Bake, Share, and Earn with{' '}
                            <span className="text-[#65c3c8]">TopCak.es</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-[#261230] mb-8">
                            Showcase your favorite recipes, get feedback from
                            cake lovers worldwide, and turn your creations into
                            valuable digital collectibles!
                        </p>
                        <Button
                            asChild
                            className="bg-[#eeaf3a] hover:bg-[#e09915] text-[#261230] text-lg px-8 py-3"
                        >
                            <Link href="/create-cake">Start Baking Now</Link>
                        </Button>
                    </motion.div>
                </section>

                {/* How It Works Steps */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-[#261230] text-center mb-12">
                            How It Works
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <Card className="h-full">
                                        <CardContent className="p-6 flex flex-col items-center text-center">
                                            <div
                                                className={cn(
                                                    step.color,
                                                    'p-3 rounded-full mb-4',
                                                )}
                                            >
                                                <step.icon className="h-8 w-8 text-white" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-[#261230] mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-[#261230]">
                                                {step.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Feature Highlight */}
                <section className="py-20 bg-[#faf7f5]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
                        <h2 className="text-3xl font-bold text-[#261230] mb-6">
                            Turn Your Cakes into Digital Collectibles
                        </h2>
                        <p className="text-xl text-[#261230] mb-6 max-w-2xl">
                            Love one of your cake creations? Turn it into a
                            unique digital collectible that others can own and
                            admire. It&apos;s easy, fun, and completely
                            optional!
                        </p>
                        <ul className="space-y-4 mb-8">
                            {collectibleFeatures.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <Star className="h-6 w-6 text-[#eeaf3a] mr-2" />
                                    <span className="text-[#261230]">
                                        {feature}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                        <Button
                            asChild
                            className="bg-[#ef9fbc] hover:bg-[#e7739e] text-white"
                        >
                            <Link
                                href="https://chain.link/education/nfts"
                                target="_blank"
                            >
                                Learn More About Digital Collectibles
                            </Link>
                        </Button>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-[#261230] text-center mb-12">
                            What Our Bakers Say
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <Card className="h-full">
                                        <CardContent className="p-6">
                                            <p className="text-[#261230] mb-4">
                                                {testimonial.quote}
                                            </p>
                                            <div className="flex items-center">
                                                <div>
                                                    <p className="font-semibold text-[#261230]">
                                                        {testimonial.name}
                                                    </p>
                                                    <p className="text-sm text-[#65c3c8]">
                                                        {testimonial.title}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-[#65c3c8]">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Share Your Sweet Creations?
                        </h2>
                        <p className="text-xl text-white mb-8">
                            Join TopCak.es today and start showcasing your
                            delicious cakes to the world. Who knows, your next
                            creation might become the next big hit!
                        </p>
                        <Button
                            asChild
                            className="bg-white text-[#65c3c8] hover:bg-gray-100 text-lg px-8 py-3"
                        >
                            <Link href="/create-cake">Get Started</Link>
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    )
}

const steps = [
    {
        icon: Cake,
        title: 'Create Your Cake',
        description:
            'Design your dream cake using our easy-to-use tools. Add ingredients, describe your method, and upload a mouthwatering photo.',
        color: 'bg-[#ef9fbc] hover:bg-[#e7739e] text-white',
    },
    {
        icon: Star,
        title: 'Share and Get Feedback',
        description:
            'Show off your creation to cake lovers worldwide. Receive likes, comments, and valuable feedback to improve your recipes.',
        color: 'bg-[#65c3c8] hover:bg-[#42b2b8] text-white',
    },
    {
        icon: Gift,
        title: 'Make It Collectible',
        description:
            "Love your cake? Turn it into a unique digital collectible that others can own and admire. It's optional, but super cool!",
        color: 'bg-[#eeaf3a] hover:bg-[#e09915] text-[#261230]',
    },
    {
        icon: Coins,
        title: 'Earn Rewards',
        description:
            "Sell your digital cake collectibles on our platform and earn royalties every time they're resold. Your creativity pays off!",
        color: 'bg-[#65c3c8] hover:bg-[#42b2b8] text-white',
    },
]

const collectibleFeatures = [
    'Create limited edition digital versions of your best cakes',
    'Earn royalties on every sale and resale',
    'Build a following and become a star baker',
    'Completely optional - enjoy the platform without this feature too!',
]

const testimonials = [
    {
        quote: 'TopCak.es has given me a whole new way to share my passion for baking. The feedback I get is invaluable!',
        name: 'Emily Chen',
        title: 'Home Baker',
    },
    {
        quote: 'I never thought I could earn money from my cake designs. The digital collectibles feature is a game-changer!',
        name: 'Marcus Johnson',
        title: 'Pastry Chef',
    },
    {
        quote: 'As a beginner, the supportive community on TopCak.es has helped me improve my skills tremendously.',
        name: 'Sophie Taylor',
        title: 'Baking Enthusiast',
    },
]
