import { Suspense } from 'react'
import { getLeaderboardCakes } from '../data'
import { LeaderboardView } from './Leaderboard.view'
import { LeaderboardSkeleton } from './Leaderboard.empty'

export const LeaderboardAsync = async () => {
    const { cakes } = await getLeaderboardCakes({
        limit: 20,
        offset: 0,
    })

    return (
        <Suspense fallback={<LeaderboardSkeleton />}>
            <LeaderboardView cakes={cakes!} offset={0} limit={20} />
        </Suspense>
    )
}
