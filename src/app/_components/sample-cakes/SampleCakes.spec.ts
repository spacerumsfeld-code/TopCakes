import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/', { timeout: 10000 })
})

test.describe('Sample Cakes', () => {
    test('should be able to navigate to the Cake page for any given sample cake', async ({
        page,
    }) => {
        const oneToFour = Math.floor(Math.random() * 4)
        await page.locator('text=View').nth(oneToFour).click()
        await expect(page).toHaveURL(/cake/, { timeout: 10000 })
    })

    test('should be navigate to the Bakery page', async ({ page }) => {
        await page
            .getByRole('link', { name: 'Explore Bakery', exact: true })
            .click()
        await expect(page).toHaveURL('/bakery', { timeout: 10000 })
    })
})
