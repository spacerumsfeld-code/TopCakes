import { Suspense } from 'react'
import { LeaderboardAsync } from './Leaderboard.async'
import { LeaderboardIntro } from './LeaderboardIntro'

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
