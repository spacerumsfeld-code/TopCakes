import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/', { timeout: 10000 })
})

test.describe('Landing Header', () => {
    test('should be able to navigate to the How It Works page', async ({
        page,
    }) => {
        await page
            .getByRole('link', { name: 'How it Works', exact: true })
            .click()
        await expect(page).toHaveURL('/info/how-it-works', {
            timeout: 10000,
        })
    })
})
