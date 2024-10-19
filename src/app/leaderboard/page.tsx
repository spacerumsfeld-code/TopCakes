import { Spotlight } from '../../ui/Spotlight'
import { Leaderboard } from './_components/Leaderboard'

export default function LeaderboardPage() {
    return (
        <>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="fuchsia"
            />
            <Leaderboard />
        </>
    )
}
