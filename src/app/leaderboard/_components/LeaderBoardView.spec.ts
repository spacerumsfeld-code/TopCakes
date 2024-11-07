import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/leaderboard', { timeout: 10000 })
})

test.describe('Leaderbord View', () => {
    test("Should be able to navigate to any given cake's page from the table", async ({
        page,
    }) => {
        const randomRowIndex = Math.floor(Math.random() * 10)
        const randomRow = page
            .locator('#test-leaderboard-row')
            .nth(randomRowIndex)
        await randomRow.click({ timeout: 10000 })
        await expect(page).toHaveURL(/cake/, { timeout: 10000 })
    })

    // test('Should load more cake rows as the user scrolls down')
})
