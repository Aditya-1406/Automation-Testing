import { test, expect } from '@playwright/test';
import * as testData from '../../test-data/qa/testdata.json';

type TestData = {
    TestDataSet1: {
        username: string,
        password: string
    },
    TestDataSet2: {
        username: string,
        password: string
    }

}

const typedTestData = testData as TestData

for (const dataSetName in typedTestData) {

    const cred = typedTestData[dataSetName as keyof TestData];

    test(`test with ${cred.username}`, async ({ page }) => {

        await test.step("Navigating to URL", async () => {
            await page.goto('https://github.com/');
            await page.getByRole('link', { name: 'Sign in' }).click();
        })

        await test.step("Entering the Credentials", async () => {
            await page.getByRole('textbox', { name: 'Username or email address' }).click();
            await page.getByRole('textbox', { name: 'Username or email address' }).fill(cred.username);
            await page.getByRole('textbox', { name: 'Password' }).click();
            await page.getByRole('textbox', { name: 'Password' }).fill(cred.password );

        })

        await test.step("Click on signing button", async () => {

            await page.getByRole('button', { name: 'Sign in', exact: true }).click();
        })

        await test.step("Validating the Error", async () => {
            await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
        })

    });
}








