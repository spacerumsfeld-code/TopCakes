import { defineConfig, devices } from '@playwright/test'

/** For local runs. */
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env' })

export default defineConfig({
    testDir: './src/app',
    timeout: 30 * 1000,
    fullyParallel: true,
    forbidOnly: Boolean(process.env.CI),
    retries: process.env.CI ? 1 : 0,
    workers: 2,
    reporter: process.env.CI ? 'dot' : 'list',
    maxFailures: process.env.CI ? 1 : 0,
    use: {
        baseURL: process.env.NEXT_PUBLIC_WEB_URL,
        headless: true,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
            testMatch: '**/*.spec.ts',
        },
        // {
        //     name: 'firefox',
        //     use: { ...devices['Desktop Firefox'] },
        // },
        // {
        //     name: 'webkit',
        //     use: { ...devices['Desktop Safari'] },
        // },

        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },
    ],
    webServer: {
        command: 'npx sst dev --mode=basic',
        url: 'http://127.0.0.1:3000',
        reuseExistingServer: !process.env.CI,
    },
})
