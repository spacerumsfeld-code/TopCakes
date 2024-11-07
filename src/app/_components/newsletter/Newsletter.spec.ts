import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/', { timeout: 10000 })
})

test.describe('Newsletter', () => {
    test('should be informed of an invalid email provided as input', async ({
        page,
    }) => {
        // No need for complexity. We know if "required" is true the browser will validate.
        await expect(page.locator('input[required]')).toBeVisible()
    })

    test('should be able to subscribe to the newsletter', async ({ page }) => {
        await page.locator('input[type="email"]').fill('test@test.com')
        await page
            .getByRole('button', { name: 'Subscribe', exact: true })
            .click()
        await expect(page.locator('li[role="status"]')).toBeVisible()
    })

    test('Should inform user they already signed up if they just did', async ({
        page,
    }) => {
        await page.locator('input[type="email"]').fill('test@test.com')
        await page
            .getByRole('button', { name: 'Subscribe', exact: true })
            .click()
        await page
            .getByRole('button', { name: 'Subscribe', exact: true })
            .click()

        await expect(page.locator('li[role="status"]')).toBeVisible()
    })
})
