import {test,expect} from '@playwright/test';

test('Handling Alerts',async({page})=>{

    await page.goto('https://www.selenium.dev/selenium/web/alerts.html#')

    page.once('dialog', async dialog=>{
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
        console.log(dialog.type())
    })

    await page.getByText('click me',{exact:true}).first().click();
})

test('Handling Prompts',async({page})=>{

    await page.goto('https://www.selenium.dev/selenium/web/alerts.html#')

    page.once('dialog', async dialog=>{
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept("Hello, I am prompt");
        console.log(dialog.type())
    })

    await page.getByText('prompt happen',{exact:true}).first().click();
})

test('Handling popups',async({page})=>{

    await page.goto('https://www.selenium.dev/selenium/web/alerts.html#')

    page.once('dialog', async dialog=>{
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
        console.log(dialog.type())
    })

    await page.getByText('test confirm',{exact:true}).first().click();
})
