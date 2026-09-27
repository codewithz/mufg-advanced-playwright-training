import { defineConfig, devices } from '@playwright/test';

/**
 * Enterprise-style config:
 * - fullyParallel + workers make the suite shardable in CI.
 * - trace/video only captured on failure/retry to keep artifacts lean.
 *
 * NOTE: `globalSetup` is deliberately NOT wired in yet — Lab 3 (Topic 7)
 * has you create `global-setup.ts` and add the `globalSetup:` line below
 * yourself. Don't add it before then.
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: { timeout: 5_000 },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['blob'], // enables `playwright merge-reports` across shards in CI
  ],

  // globalSetup: require.resolve('./global-setup'),  // <-- Lab 3 adds this

  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    actionTimeout: 10_000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
