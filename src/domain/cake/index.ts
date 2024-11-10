import { db } from '@/clients/db.client'
import { cakes as cakeTable } from './cake.sql'
import { eq, sql, and } from 'drizzle-orm'
import { CakeFilter, CakeSort, CakeType } from './cake.models'

export namespace Cake {
    export const getCakeById = async (cakeId: number) => {
        const cakes = await db
            .select()
            .from(cakeTable)
            .where(eq(cakeTable.id, cakeId))
            .limit(1)

        return cakes[0]
    }

    export const getCakesByAddress = async ({
        address,
        limit,
        offset,
        filter,
        sort,
    }: {
        address: string
        limit: number
        offset: number
        filter: CakeFilter
        sort: CakeSort
    }) => {
        const orderBy =
            sort === CakeSort.Wins ? sql`wins desc` : sql`created_at desc`

        const query = db
            .select()
            .from(cakeTable)
            .orderBy(orderBy)
            .limit(limit)
            .offset(offset)

        if (filter !== CakeFilter.None) {
            query.where(
                and(
                    eq(cakeTable.type, filter as unknown as CakeType),
                    eq(cakeTable.ownerAddress, address),
                ),
            )
        } else {
            query.where(eq(cakeTable.ownerAddress, address))
        }

        const cakes = await query

        return cakes
    }

    export const getSampleCakes = async () => {
        const cakes = await db
            .select({
                id: cakeTable.id,
                name: cakeTable.name,
                image_url: cakeTable.imageUrl,
            })
            .from(cakeTable)
            .orderBy(sql`random()`)
            .limit(4)

        return cakes
    }

    export const getBakeOffCakes = async () => {
        const cakes = await db
            .select()
            .from(cakeTable)
            .orderBy(sql`random()`)
            .limit(2)

        return cakes
    }

    export const getLeaderboardCakes = async ({
        limit,
        offset,
    }: {
        limit: number
        offset: number
    }) => {
        const cakes = await db
            .select()
            .from(cakeTable)
            .orderBy(sql`wins desc`)
            .limit(limit)
            .offset(offset)

        return cakes
    }

    export const getBakeryCakes = async ({
        limit,
        offset,
        filter,
        sort,
    }: {
        limit: number
        offset: number
        filter: CakeFilter
        sort: CakeSort
    }) => {
        const orderBy =
            sort === CakeSort.Wins ? sql`wins desc` : sql`created_at desc`

        const query = db
            .select()
            .from(cakeTable)
            .orderBy(orderBy)
            .limit(Number(limit))
            .offset(Number(offset))

        if (filter !== CakeFilter.None) {
            query.where(eq(cakeTable.type, filter as unknown as CakeType))
        }

        const cakes = await query

        return cakes
    }

    export const create = async ({
        ownerAddress,
        name,
        description,
        imageUrl,
        type,
        recipe,
        ingredients,
    }: {
        ownerAddress: string
        name: string
        description: string
        imageUrl: string
        type: CakeType
        recipe: string[]
        ingredients: { name: string; quantity: number; unit: string }[]
    }) => {
        const newCake = await db
            .insert(cakeTable)
            .values({
                name,
                description,
                imageUrl,
                type,
                recipe,
                ingredients,
                ownerAddress,
            })
            .returning({ id: cakeTable.id })

        return newCake
    }

    export const updateWinnerCake = async (winnerCakeId: number) => {
        await db
            .update(cakeTable)
            .set({
                wins: sql`wins + 1`,
            })
            .where(eq(cakeTable.id, winnerCakeId))

        return { success: true }
    }
}
