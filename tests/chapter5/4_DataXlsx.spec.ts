import { test, expect } from '@playwright/test';

import * as path from 'path';
import { readExcelFile } from '../../src/utils/excelhelper';

const filePath = path.join(__dirname, '../../test-data/qa/testdata.xlsx');
const record = readExcelFile(filePath);



for (const cred of record) {
    test(`test with ${cred.username}`, async ({ page }) => {

        await test.step("Navigating to URL", async () => {
            await page.goto('https://github.com/');
            await page.getByRole('link', { name: 'Sign in' }).click();
        })

        await test.step("Entering the Credentials", async () => {
            await page.getByRole('textbox', { name: 'Username or email address' }).click();
            await page.getByRole('textbox', { name: 'Username or email address' }).fill(cred.username);
            await page.getByRole('textbox', { name: 'Password' }).click();
            await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);

        })

        await test.step("Click on signing button", async () => {

            await page.getByRole('button', { name: 'Sign in', exact: true }).click();
        })

        await test.step("Validating the Error", async () => {
            await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
        })

    });

}
















