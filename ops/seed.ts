import { db } from '../src/clients/db.client'
import { cakes } from '../src/models'
import { faker } from '@faker-js/faker'
import axios from 'axios'

if (!('DATABASE_URL' in process.env)) throw new Error('DATABASE_URL not found')

const UNSPLASH_ACCESS_KEY = 'HhRWfyYyX_tr3gZiR2xwRFj2a3FXIw_-FIE0303hS5U'

async function fetchCakeImageUrls() {
    const categories = [
        'chocolate cake',
        'fruit cake',
        'vanilla cake',
        'red velvet cake',
        'carrot cake',
        'lemon cake',
        'cheesecake',
        'pound cake',
        'bundt cake',
        'cake',
    ]
    const promises = categories.map(async (category) => {
        const response = await axios('https://api.unsplash.com/search/photos', {
            params: {
                query: category,
                per_page: 100,
            },
            headers: {
                Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            },
        })
        return response.data.results.map(
            (result: { urls: { regular: string } }) => result.urls.regular,
        )
    })

    const imageUrls = await Promise.all(promises)
    return imageUrls.flat()
}

const seed = async () => {
    const imageUrls = await fetchCakeImageUrls()

    const data: any[] = []
    for (let i = 0; i < 99; i++) {
        data.push({
            name: faker.commerce.productName(),
            image_url: imageUrls[i],
            type: 'wow so good',
            recipe: 'hmmmm',
            ingredients: ['cheese', 'butter'],
            description: 'so cool!',
            wins: 5,
            losses: 76,
            vector: [1, 2, 3],
        })
    }

    console.log('Seed start')
    await db.insert(cakes).values(data)
    console.log('Seed finish')
}

seed()
