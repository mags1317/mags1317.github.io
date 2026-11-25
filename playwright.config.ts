import process from 'node:process';
import { defineConfig, devices } from '@playwright/test';

const baseURL = 'http://127.0.0.1:4321';

export default defineConfig({
  testDir: './tests',
  forbidOnly: Boolean(process.env.CI),
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { baseURL, trace: 'retain-on-failure' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4321 --strictPort',
    url: baseURL,
  },
});
