import {test,expect} from '@playwright/test'


test('textcontent',async({page})=>{

    await page.goto('https://github.com/Aditya-1406')


    const name = await page.locator('//span[@itemprop="name"]').first().textContent()
    console.log(name?.trim());

    const name2 = await page.locator('//span[@itemprop="name"]').first().innerText()
    console.log(name2);

    const attribute = await page.locator('//span[@itemprop="name"]').first().getAttribute('class')
    console.log(attribute);
})