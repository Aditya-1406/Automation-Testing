import { test, expect } from '@playwright/test';
import { time } from 'console';

test('test', async ({ page }) => {

    // test.setTimeout(0.2*60*1000);
  await test.step("Navigating to URL", async () => {
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
  })

  await test.step("Entering the Credentials", async () => {
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('tester123');
    await page.getByRole('textbox', { name: 'Password-1' }).click({timeout:5000});
    await page.getByRole('textbox', { name: 'Password' }).fill('test@123');

  })

  await test.step("Click on signing button", async () => {

    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  })

  await test.step("Validating the Error", async () => {
    await expect(page.getByRole('alert')).toContainText('Incorrect.',{ timeout: 5000});
  })

//   await page.waitForTimeout(40000);




});