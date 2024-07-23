import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import { CardBody, CardContainer, CardItem } from '@/ui/3DCard'
import { SummaryModal } from './SummaryModal'

export interface Cake {
    id: number
    name: string
    image_url: string
    type: string
    recipe: string
    ingredients: string[]
    description: string
    wins: number
    losses: number
    vector: number[]
}

export const CakeCard = ({
    cake,
    cakeIdx,
    opposingCakeId,
    setCakes,
}: {
    cake: Cake
    cakeIdx: number
    opposingCakeId: number
    setCakes: Dispatch<SetStateAction<Cake[]>>
}) => {
    return (
        <SummaryModal
            cake={cake}
            cakeIdx={cakeIdx}
            opposingCakeId={opposingCakeId}
            setCakes={setCakes}
        >
            <CardContainer className="inter-var">
                <CardBody
                    key={cake.id}
                    id={`cake-${cake.id}`}
                    className="relative group/card hover:shadow-2xl  hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
                >
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-white"
                    >
                        {cake.name}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className=" text-sm max-w-sm mt-2 text-neutral-300"
                    >
                        {cake.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full h-full mt-4">
                        <Image
                            src={cake.image_url}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                        >
                            Vote
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>
        </SummaryModal>
    )
}
