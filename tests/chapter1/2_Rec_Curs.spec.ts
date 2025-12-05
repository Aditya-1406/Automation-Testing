import {test,expect} from '@playwright/test'

test('Verifying the title and logo', async({page})=>{

    await page.goto("https://practice.expandtesting.com/")
    await page.getByRole('textbox', { name: 'Search an example...' }).fill('test');

    await expect(page).toHaveTitle('Automation Testing Practice Website for QA and Developers | UI and API')
    
    await expect(page.getByRole('link', { name: 'Test Login Page' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Test Register Page' })).toBeVisible();
    await expect(page.locator('#main-title')).toContainText('Automation Testing Practice WebSite for QA and Developers');

})