import { test, expect } from '@playwright/test';
import { time } from 'console';

test('test', async ({ page, browser}) => {


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
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  })


  const context =await browser.newContext();
  const page1 = await context.newPage();


  await test.step("Navigating to URL", async () => {
    await page1.goto('https://github.com/');
    await page1.getByRole('link', { name: 'Sign in' }).click();
  })

  await test.step("Entering the Credentials", async () => {
    await page1.getByRole('textbox', { name: 'Username or email address' }).click();
    await page1.getByRole('textbox', { name: 'Username or email address' }).fill('tester123');
    await page1.getByRole('textbox', { name: 'Password' }).click();
    await page1.getByRole('textbox', { name: 'Password' }).fill('test@123');

  })

  await test.step("Click on signing button", async () => {

    await page1.getByRole('button', { name: 'Sign in', exact: true }).click();
  })

  await test.step("Validating the Error", async () => {
    await expect(page1.getByRole('alert')).toContainText('Incorrect username or password.');
  })


  const page2 = await context.newPage();

  await test.step("Navigating to URL", async () => {
    await page2.goto('https://github.com/');
    await page2.getByRole('link', { name: 'Sign in' }).click();
  })

  await test.step("Entering the Credentials", async () => {
    await page2.getByRole('textbox', { name: 'Username or email address' }).click();
    await page2.getByRole('textbox', { name: 'Username or email address' }).fill('tester123');
    await page2.getByRole('textbox', { name: 'Password' }).click();
    await page2.getByRole('textbox', { name: 'Password' }).fill('test@123');

  })



});