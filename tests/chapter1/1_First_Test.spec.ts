import {test,expect} from '@playwright/test'

test('Verifying the Navigation', async({page})=>{
    console.log("Hello world")

    await page.goto("https://practice.expandtesting.com/")
    await page.getByRole('textbox', { name: 'Search an example...' }).fill('test');

    await expect(page).toHaveTitle('Automation Testing Practice Website for QA and Developers | UI and API')

})