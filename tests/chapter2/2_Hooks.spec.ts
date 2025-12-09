import {test,expect} from '@playwright/test'

test.beforeAll(async()=>{
    console.log("Running before all the test cases")
});

test.afterAll(async()=>{
    console.log("Running after all the test cases")
});

test.beforeEach(async({page})=>{
    console.log("Running before each  test cases")
    await page.goto("https://practice.expandtesting.com/")
});

test.afterEach(async()=>{
    console.log("Running after each test cases")
});

test('test1', async({page})=>{

    console.log("Running test-1")

    // await page.goto("https://practice.expandtesting.com/")
    await page.getByRole('textbox', { name: 'Search an example...' }).fill('test');

    await expect(page).toHaveTitle('Automation Testing Practice Website for QA and Developers | UI and API')
    
    await expect(page.getByRole('link', { name: 'Test Login Page' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Test Register Page' })).toBeVisible();
    await expect(page.locator('#main-title')).toContainText('Automation Testing Practice WebSite for QA and Developers');

})




test('test2', async({page})=>{

    console.log("Running test-2")

    // await page.goto("https://practice.expandtesting.com/")
    await page.getByRole('textbox', { name: 'Search an example...' }).fill('test');

    await expect(page).toHaveTitle('Automation Testing Practice Website for QA and Developers | UI and API')
    
    await expect(page.getByRole('link', { name: 'Test Login Page' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Test Register Page' })).toBeVisible();
    await expect(page.locator('#main-title')).toContainText('Automation Testing Practice WebSite for QA and Developers');

})