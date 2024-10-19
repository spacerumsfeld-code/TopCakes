import { getLeaderboardCakes } from '../server'
import { LeaderboardView } from './Leaderboard.view'

export const LeaderboardAsync = async () => {
    const { cakes } = await getLeaderboardCakes({
        limit: 20,
        offset: 0,
    })

    return <LeaderboardView cakes={cakes!} />
}
