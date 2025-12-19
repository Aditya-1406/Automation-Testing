import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();

    // await expect(page).toHaveScreenshot('signinpage.png');

    await page.getByRole('textbox', { name: 'Username or email address' }).fill('tester123');
    await expect(page).toHaveScreenshot('signinpage.png');

    // await page.getByRole('textbox', { name: 'Username or email address' }).click();
    // await page.getByRole('textbox', { name: 'Username or email address' }).fill('tester123');
    // await page.getByRole('textbox', { name: 'Password' }).click();
    // await page.getByRole('textbox', { name: 'Password' }).fill('test@123');
});

test.only('test2', async ({ page }) => {

    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();

    await page.waitForTimeout(3000);
    const element = await page.getByRole('textbox', { name: 'Username or email address' })
    await expect(element).toHaveScreenshot('username.png');

    element.fill('tester123');
    await expect(element).toHaveScreenshot('username.png');
});