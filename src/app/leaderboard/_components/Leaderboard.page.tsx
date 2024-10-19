import { Suspense } from 'react'
import { LeaderboardAsync } from './Leaderboard.async'
import { LeaderboardIntro } from './LeaderboardIntro'

// @TODO: Explore just passing the promise to client and using "use" with Suspense.

export const LeaderboardPage = () => {
    // Render
    return (
        <div className="min-h-screen bg-[#faf7f5]">
            <LeaderboardIntro />
            <Suspense fallback={<div>Loading...</div>}>
                <LeaderboardAsync />
            </Suspense>
        </div>
    )
}
