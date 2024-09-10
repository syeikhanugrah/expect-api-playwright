import { defineConfig, expect } from '@playwright/test';
import matchers from './src';

expect.extend(matchers);

export default defineConfig({
  testDir: './tests',
  retries: process.env.CI ? 2 : 0,
});
