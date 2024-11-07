import { NewsletterForm } from './NewsletterForm'

export const Newsletter = () => {
    return (
        <section data-testid="newsletter" className="py-20 bg-[#faf7f5]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-[#261230] mb-8">
                    Join our Community. It&apos;s pretty sweet.
                </h2>
                <p className="text-lg text-[#261230] mb-8">
                    Stay updated with the latest recipes, competitions, and
                    more! Unsubscribe at any time.
                </p>
                <NewsletterForm />
            </div>
        </section>
    )
}
