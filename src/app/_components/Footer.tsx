export const Footer = () => {
    return (
        <footer className="bg-[#261230] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-start md:flex-row gap-8 md:items-center justify-center">
                    <div className="flex flex-col gap-4 max-w-lg">
                        <h3 className="text-lg font-semibold mb-4">
                            About TopCak.es
                        </h3>
                        <p className="text-sm">
                            The sweetest platform for cake lovers and bakers
                            alike. Create, battle, and earn royalities on your
                            delicious digital desserts!
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-[#65c3c8]">
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#65c3c8]">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#65c3c8]">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#65c3c8]">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-[#200f29] text-center">
                    <p className="text-sm">
                        &copy; 2024 TopCak.es. All rights reserved. Powered by
                        frosting and innovation.
                    </p>
                </div>
            </div>
        </footer>
    )
}
