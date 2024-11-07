import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/bakery', { timeout: 10000 })
})

test.describe('Bakery', () => {
    test("should be able to visit any given cake's page", async ({ page }) => {
        const randomRowIndex = Math.floor(Math.random() * 10)
        await page
            .getByRole('button', { name: 'Recipe' })
            .nth(randomRowIndex)
            .click()
        await expect(page).toHaveURL(/cake/, { timeout: 10000 })
    })

    test('Should be able to load more cakes by clicking the Load More Button', async ({
        page,
    }) => {
        const initialCakeCount = await page
            .getByRole('button', { name: 'Recipe' })
            .count()
        await page
            .getByRole('button', { name: 'Load More' })
            .click({ timeout: 10000 })
        await expect(
            page.getByRole('button', { name: 'Load More' }),
        ).toBeVisible({ timeout: 10000 })
        const newCakeCount = await page
            .getByRole('button', { name: 'Recipe' })
            .count()
        expect(newCakeCount).toBeGreaterThan(initialCakeCount)
    })

    test('Should be able to sort by Wins', async ({ page }) => {
        await page.getByRole('combobox').first().click()
        await page.getByText('Wins', { exact: true }).click()
        await expect(page).toHaveURL(/sort=Wins/, { timeout: 10000 })
        const highestCakeWinsText = await page
            .getByTestId('cake-wins')
            .first()
            .innerText()
        const lowestCakeWinsText = await page
            .getByTestId('cake-wins')
            .last()
            .innerText()
        const highestCakeWins = Number(highestCakeWinsText.split(':')[1])
        const lowestCakeWins = Number(lowestCakeWinsText.split(':')[1])
        expect(highestCakeWins).toBeGreaterThan(lowestCakeWins)
    })

    test('Should be able to sort by Cake Type', async ({ page }) => {
        await page.getByRole('combobox').nth(1).click()
        await page.getByLabel('Opera Cake').click()
        await expect(page).toHaveURL(/filter=OperaCake/, { timeout: 10000 })
        await expect(page.getByTestId('cake-type').nth(0)).toHaveText(
            'Opera Cake',
        )
    })
})
