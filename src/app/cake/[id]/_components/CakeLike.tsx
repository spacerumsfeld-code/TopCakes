'use client'

import { Button } from '@/ui/components/button'
import { ThumbsUp } from 'lucide-react'
import { likeCake } from '../data'
import { toast } from 'sonner'
import { useState } from 'react'
import { cn } from '@/lib'

export const CakeLike = (props: { cakeId: number }) => {
    // @State
    const [isLiked, setIsLiked] = useState(false)

    // @Interactivity
    const handleLike = async () => {
        if (isLiked) return
        await likeCake(props.cakeId)
        toast.success('You liked this cake!')
        setIsLiked(true)
    }

    // @Render
    return (
        <Button
            className={cn(
                isLiked
                    ? 'bg-[#ef9fbc] text-white'
                    : 'bg-white text-[#ef9fbc] hover:bg-[#ef9fbc] hover:text-white hover:scale-105',
            )}
            aria-label="Like this cake"
            onClick={handleLike}
        >
            <ThumbsUp className="w-5 h-5" />
        </Button>
    )
}
