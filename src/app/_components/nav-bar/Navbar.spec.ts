import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/', { timeout: 10000 })
})

test.describe('Navbar', () => {
    test.describe('Navigation', () => {
        test('should be able to navigate to the Bakery page', async ({
            page,
        }) => {
            await page
                .getByRole('link', { name: 'Bakery', exact: true })
                .click()
            await expect(page).toHaveURL('/bakery', { timeout: 10000 })
        })

        test('Should be able to navigate to the Leaderboard page', async ({
            page,
        }) => {
            await page
                .getByRole('link', { name: 'Leaderboard', exact: true })
                .click()
            await expect(page).toHaveURL('/leaderboard', { timeout: 10000 })
        })

        test('Should be able to navigate to the Bake-Off page', async ({
            page,
        }) => {
            await page.getByRole('link', { name: 'Bakeoff' }).click()
            await expect(page).toHaveURL('/bake-off', { timeout: 10000 })
        })

        test('Should be able to navigate back to the home page from any other page', async ({
            page,
        }) => {
            await page.getByRole('link', { name: 'Bakeoff' }).click()
            await page.getByRole('img', { name: 'TopCak.es Logo' }).click()
            await expect(page).toHaveURL('/', { timeout: 10000 })
        })
    })

    test.describe('Authentication', () => {})
})

//     await page.getByRole('link', { name: 'Start Baking' }).click()
//     await page.getByRole('button', { name: 'Start Creating' }).click()
//     await page.goto('http://localhost:3000/create-cake')
//     await page.getByRole('link', { name: 'TopCak.es Logo TopCak.es' }).click()
//     await page.getByRole('link', { name: 'View Leaderboard' }).click()
//     await page.getByRole('link', { name: 'TopCak.es Logo TopCak.es' }).click()
//     await page.getByRole('link', { name: 'Explore Bakery' }).click()
//     await page.getByRole('link', { name: 'TopCak.es Logo TopCak.es' }).click()
//     await page
//         .getByRole('link', { name: 'TopCak.es Logo TopCak.es' })
//         .press('CapsLock')
// })
