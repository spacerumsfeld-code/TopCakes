'use client'

import { Button } from '@/ui/components/button'
import { Heart } from 'lucide-react'
import { toggleCakeFavorite } from '../data'
import { toast } from 'sonner'
import { useState } from 'react'
import { cn } from '@/lib'

export const CakeFavorite = (props: { cakeId: number }) => {
    // @State
    const [isFavorited, setIsFavorited] = useState(false)
    console.info(isFavorited)

    // @Interactivity
    const handleFavorite = async () => {
        const { success } = await toggleCakeFavorite(props.cakeId)
        switch (success) {
            case true:
                toast.success('You favorited this cake!')
                break
            case false:
                toast.error('Cake removed from favorites')
                break
        }
        setIsFavorited(success)
    }

    // @Render
    return (
        <Button
            className={cn(
                isFavorited
                    ? 'bg-[#eeaf3a] text-[#261230]'
                    : 'bg-white text-[#261230] hover:bg-[#e09915] hover:text-white hover:scale-105',
            )}
            aria-label="Like this cake"
            onClick={() => handleFavorite()}
        >
            <Heart className="w-5 h-5" />
        </Button>
    )
}
