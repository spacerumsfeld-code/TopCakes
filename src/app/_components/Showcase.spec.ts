import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/', { timeout: 10000 })
})

test.describe('Showcase CTA', () => {
    test('should be able to navigate to the Create Cake page', async ({
        page,
    }) => {
        await page
            .getByRole('link', { name: 'Start Baking', exact: true })
            .click()
        await expect(page).toHaveURL('/create-cake', {
            timeout: 10000,
        })
    })
})
