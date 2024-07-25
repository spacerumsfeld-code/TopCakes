import { Cake } from '@/app/_components/cake-card/CakeCard'
import { getLeaderboardCakes } from '../_action'
import { MagicButton } from '@/ui/MagicButton'

export const LoadMore = ({
    offset,
    setOffset,
    setCakesToDisplay,
    setHasMore,
}: {
    offset: number
    setOffset: React.Dispatch<React.SetStateAction<number>>
    setCakesToDisplay: React.Dispatch<React.SetStateAction<Cake[]>>
    setHasMore: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    // Interactivity
    const handleLoadMore = async () => {
        const { leaderboardCakes, nextOffset, hasMore } =
            await getLeaderboardCakes({
                limit: 20,
                offset,
            })

        setHasMore(hasMore)
        setOffset(nextOffset)
        setCakesToDisplay((currentCakes) => [
            ...currentCakes,
            ...leaderboardCakes,
        ])
    }

    // Render
    return (
        <div className="py-8 mx-auto">
            <MagicButton
                clickAction={() => {
                    handleLoadMore()
                }}
            >
                Load More
            </MagicButton>
        </div>
    )
}
