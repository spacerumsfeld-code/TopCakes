import { getLeaderboardCakes } from '../data'
import { LeaderboardView } from './Leaderboard.view'

export const LeaderboardAsync = async () => {
    const { cakes } = await getLeaderboardCakes({
        limit: 20,
        offset: 0,
    })

    return <LeaderboardView cakes={cakes!} offset={20} limit={20} />
}
