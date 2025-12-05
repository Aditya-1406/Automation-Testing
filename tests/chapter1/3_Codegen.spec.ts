import { test, expect } from '@playwright/test';

test('youtube playlist validation', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('codedebug');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Data Structures and' }).click();
  await expect(page.locator('#header-description').getByRole('link', { name: 'Data Structures and' })).toBeVisible();
});