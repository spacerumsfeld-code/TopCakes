import { db } from '../src/clients/db.client'
import { cakes } from '../src/domain/cake/cake.sql'
import { CakeType } from '../src/domain/cake/cake.models'
import { faker } from '@faker-js/faker'
// import axios from 'axios'

const CAKE_IMAGE_URL_SET = [
    'https://images.unsplash.com/photo-1508737804141-4c3b688e2546?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1505976378723-9726b54e9bb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1624006229221-2abd931f266b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1542007920-992d2c424d09?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1525203135335-74d272fc8d9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1551879400-111a9087cd86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1565661834013-d196ca46e14e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjJ8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1521310137449-68ce7d967620?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjF8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1586985289906-406988974504?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjN8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1488474339733-16a5dd4ba5e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjd8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1642965232863-3f118f06d494?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzZ8fHxlbnwwfHx8fHw%3D',
]

// if (!('DATABASE_URL' in process.env)) throw new Error('DATABASE_URL not found')

// const UNSPLASH_ACCESS_KEY = 'HhRWfyYyX_tr3gZiR2xwRFj2a3FXIw_-FIE0303hS5U'

// async function fetchCakeImageUrls() {
//     const categories = Object.values(CakeType).slice(0, 19)
//     const promises = categories.map(async (category) => {
//         const response = await axios('https://api.unsplash.com/search/photos', {
//             params: {
//                 query: category,
//                 per_page: 100,
//             },
//             headers: {
//                 Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
//             },
//         })
//         return response.data.results.map(
//             (result: { urls: { regular: string } }) => result.urls.regular,
//         )
//     })

//     const imageUrls = await Promise.all(promises)
//     return imageUrls.flat()
// }

const seed = async () => {
    // const imageUrls = await fetchCakeImageUrls()

    const data: any[] = []
    for (let i = 0; i < 99; i++) {
        data.push({
            name: faker.food.dish(),
            // image_url: imageUrls[i],
            imageUrl:
                CAKE_IMAGE_URL_SET[
                    Math.floor(Math.random() * CAKE_IMAGE_URL_SET.length)
                ],
            type: CakeType.OperaCake,
            ingredients: [
                {
                    name: faker.food.ingredient(),
                    quantity: faker.number.int(),
                    unit: 'oz',
                },
            ],
            recipe: [
                'Do this thing first',
                'Then go ahead and do this brah',
                'lets make this 10 steps long ok',
                'cool story bro sounds good',
                'this is kind of annoying',
                'Do this thing first',
                'Then go ahead and do this brah',
                'lets make this 10 steps long ok',
                'cool story bro sounds good',
                'this is kind of annoying',
            ],
            description: faker.food.description(),
            wins: 5,
        })
    }

    console.log('Seed start')
    await db.insert(cakes).values(data)
    console.log('Seed finish')
}

seed()
