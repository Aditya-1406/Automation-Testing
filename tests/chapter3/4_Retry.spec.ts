import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await test.step("Navigating to URL", async () => {
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
  })

  await test.step("Entering the Credentials", async () => {
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('tester123');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('test@123');

  })

  await test.step("Click on signing button", async () => {

    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  })

  await test.step("Validating the Error", async () => {
    await expect(page.getByRole('alert')).toHaveText('Incorrect username');
  })




});