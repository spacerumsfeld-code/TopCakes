import { getLeaderboardCakes } from '../_action'
import { LeaderboardDisplay } from './LeaderboardDisplay'

export const Leaderboard = async () => {
    const { leaderboardCakes } = await getLeaderboardCakes({
        limit: 20,
        offset: 0,
    })

    return <LeaderboardDisplay cakes={leaderboardCakes} />
}
