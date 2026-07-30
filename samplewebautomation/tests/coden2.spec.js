import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sgtestinginstituteapp.onrender.com/login');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('pgudi');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('pgudi');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByRole('heading')).toContainText('S G Software Testing Institute');
});