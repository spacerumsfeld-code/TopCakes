import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/', { timeout: 10000 })
})

test.describe('Bakoff', () => {
    test("should be able to view either bake-off cake's recipe", async ({
        page,
    }) => {
        const zeroOrOne = Math.floor(Math.random() * 2)
        await page.locator('text=Recipe').nth(zeroOrOne).click()
        await expect(page.locator('#test-cake-modal-recipe')).toBeVisible({
            timeout: 10000,
        })
    })

    test('Should be able to cast a vote for either bake-off cake and be presented with another bake-off', async ({
        page,
    }) => {
        const zeroOrOne = Math.floor(Math.random() * 2)
        const initialCakeNames = [
            await page.locator('#test-cake-name-left').allTextContents(),
            await page.locator('#test-cake-name-right').allTextContents(),
        ].flat()
        await page.locator('text=Vote').nth(zeroOrOne).click()
        await page.waitForTimeout(2000)
        const newCakeNames = [
            await page.locator('#test-cake-name-left').allTextContents(),
            await page.locator('#test-cake-name-right').allTextContents(),
        ].flat()

        expect(newCakeNames).not.toEqual(initialCakeNames)
    })

    test('Should be able to navigate to the leaderboard page', async ({
        page,
    }) => {
        await page
            .getByRole('link', { name: 'Leaderboard', exact: true })
            .click()
        await expect(page).toHaveURL('/leaderboard', { timeout: 10000 })
    })
})
