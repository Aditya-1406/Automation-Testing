import {test,expect} from '@playwright/test'

test('Verifying the Navigation', async({page})=>{

    await page.goto("https://www.google.com/")
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.getByRole('link',{name : 'Playwright by testers talk'}).first().click()

    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube')

})