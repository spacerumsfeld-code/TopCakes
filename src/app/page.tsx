import { FaceOff } from './_components/face-off/FaceOff'
import { Hero } from './_components/Hero'

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <Hero />
            <FaceOff />
        </main>
    )
}
