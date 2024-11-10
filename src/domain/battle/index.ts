import { db } from '@/clients/db.client'
import { battles } from './battle.sql'
import { cakesToBattles } from './cake-battle.sql'

export namespace Battle {
    export const create = async ({
        cake1Id,
        cake2Id,
        winnerId,
    }: {
        cake1Id: number
        cake2Id: number
        winnerId: number
    }) => {
        const newBattle = await db
            .insert(battles)
            .values({
                cake1Id,
                cake2Id,
                winnerId,
            })
            .returning({ id: battles.id })

        return newBattle
    }

    export const mapBattleToCake = async (cakeId: number, battleId: number) => {
        db.insert(cakesToBattles).values({
            cakeId,
            battleId,
        })
    }
}
