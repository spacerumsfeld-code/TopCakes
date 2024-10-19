// @TODO: Add query to get 4 cakes to display on this page. Random, "top", or some criteria
// @TODO: Ensure mobile compatibility
// @TODO: Create separate 'faceoff' component that we use here as well as the face off page.

import { Button } from '@/ui/components/button'
import { Card, CardContent } from '@/ui/components/card'
import { Trophy, ShoppingBag, ChevronRight } from 'lucide-react'

export const LandingPage = () => {
    return (
        <div className="min-h-screen bg-[#faf7f5]">
            <main>
                <section className="py-20 text-center">
                    <h1 className="text-5xl font-extrabold text-[#261230] mb-4">
                        Welcome to TopCak.es
                    </h1>
                    <p className="text-xl text-[#261230] mb-8">
                        Create, Battle, and Share Delicious Cake Creations!
                    </p>
                    <Button
                        size="lg"
                        className="bg-[#eeaf3a] hover:bg-[#e09915] text-[#261230] text-lg px-8 py-6 rounded-full shadow-lg"
                    >
                        Start Baking
                    </Button>
                </section>

                <section id="create" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-[#261230] text-center mb-12">
                            Showcase Your Cakes
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <img
                                    src="/placeholder.svg?height=400&width=400"
                                    alt="Cake Example"
                                    className="rounded-lg shadow-2xl"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-[#261230] mb-4">
                                    Share Your Delicious Creations
                                </h3>
                                <p className="text-lg text-gray-700 mb-6">
                                    Upload your most mouthwatering cake photos
                                    or cherished recipes. Join our community of
                                    passionate bakers and cake enthusiasts!
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        'Easy creation process',
                                        'Showcase your baking skills',
                                        'Engage with fellow cake lovers',
                                        'Earn royalties on your creations',
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center"
                                        >
                                            <ChevronRight className="h-6 w-6 text-[#65c3c8] mr-2" />
                                            <span className="text-gray-800">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="bg-[#ef9fbc] hover:bg-[#e7739e] text-white">
                                    Start Creating
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="battle"
                    className="py-20 bg-gradient-to-r from-[#efeae6] to-[#e7e2df]"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-[#261230] text-center mb-12">
                            Cake Battle Royale
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                            <Card className="bg-white shadow-xl transform hover:scale-105 transition-transform duration-200">
                                <CardContent className="p-6 text-center">
                                    <img
                                        src="/placeholder.svg?height=200&width=200"
                                        alt="Chocolate Cake"
                                        className="rounded-full mx-auto mb-4"
                                    />
                                    <h3 className="text-xl font-semibold text-[#261230] mb-2">
                                        Triple Chocolate Delight
                                    </h3>
                                    <Button className="mt-4 bg-[#eeaf3a] hover:bg-[#e09915] text-[#261230]">
                                        Vote
                                    </Button>
                                </CardContent>
                            </Card>
                            <div className="text-center">
                                <Trophy className="h-20 w-20 text-[#65c3c8] mx-auto mb-4" />
                                <p className="text-2xl font-bold text-[#261230]">
                                    VS
                                </p>
                            </div>
                            <Card className="bg-white shadow-xl transform hover:scale-105 transition-transform duration-200">
                                <CardContent className="p-6 text-center">
                                    <img
                                        src="/placeholder.svg?height=200&width=200"
                                        alt="Strawberry Cake"
                                        className="rounded-full mx-auto mb-4"
                                    />
                                    <h3 className="text-xl font-semibold text-[#261230] mb-2">
                                        Strawberry Shortcake Dream
                                    </h3>
                                    <Button className="mt-4 bg-[#eeaf3a] hover:bg-[#e09915] text-[#261230]">
                                        Vote
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                        <p className="text-center mt-12 text-lg text-[#261230]">
                            Vote for your favorite cake and help it climb the
                            leaderboard!
                        </p>
                    </div>
                </section>

                <section id="marketplace" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-[#261230] text-center mb-12">
                            Cake Marketplace
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    name: 'Unicorn Sprinkle Surprise',
                                    price: '0.1 ETH',
                                },
                                {
                                    name: 'Chocolate Lava Explosion',
                                    price: '0.3 ETH',
                                },
                                {
                                    name: "Grandma's Secret Apple Pie",
                                    price: '1.4 ETH',
                                },
                                {
                                    name: 'Matcha Green Tea Delight',
                                    price: '2.89 ETH',
                                },
                            ].map((item, index) => (
                                <Card
                                    key={index}
                                    className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                >
                                    <img
                                        src={`/placeholder.svg?height=200&width=200&text=Cake+${index + 1}`}
                                        alt={item.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <CardContent className="p-4">
                                        <h3 className="text-lg font-semibold text-[#261230] mb-2">
                                            {item.name}
                                        </h3>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#261230] font-bold">
                                                {item.price}
                                            </span>
                                            <Button
                                                size="sm"
                                                className="bg-[#65c3c8] hover:bg-[#42b2b8] text-white"
                                            >
                                                <ShoppingBag className="h-4 w-4 mr-2" />
                                                Buy
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <Button
                                size="lg"
                                className="bg-[#65c3c8] hover:bg-[#42b2b8] text-white"
                            >
                                Explore Marketplace
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
