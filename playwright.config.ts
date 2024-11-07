import { defineConfig, devices } from '@playwright/test'

/** For local runs. */
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env' })

const config = defineConfig({
    testDir: './src/app',
    timeout: 30 * 1000,
    // until we up our AWS lambda concurrency
    fullyParallel: false,
    forbidOnly: Boolean(process.env.CI),
    retries: process.env.CI ? 1 : 0,
    workers: '50%',
    // workers: 1,
    reporter: process.env.CI ? 'dot' : 'list',
    maxFailures: process.env.CI ? 1 : 0,
    use: {
        baseURL: process.env.WEB_URL!,
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
    webServer: process.env.CI
        ? undefined
        : {
              command: 'pnpm run dev',
              port: 3000,
              reuseExistingServer: true,
          },
})

export default config
