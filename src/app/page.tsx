import { FaceOff } from './_components/FaceOff'
import { Hero } from './_components/Hero'

export default async function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <FaceOff />
        </main>
    )
}
