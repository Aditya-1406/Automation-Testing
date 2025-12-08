import {test,expect} from '@playwright/test'

test("Taking the screenshot", async({page})=>{

    await page.goto('https://www.youtube.com/@codeanddebug')

    await test.step("Adding the element Screenshot", async()=>{
        await page.locator("//div[@id='page-header-banner']").screenshot({path:'screenshots/elementscreenshot.png'})
    })

    await test.step("Adding the page Screenshot", async()=>{
        await page.screenshot({path:'screenshots/pagescreenshot.png'})
    })

    await test.step("Adding the full page Screenshot", async()=>{
        await page.screenshot({path:'screenshots/fullpagescreenshot.png',fullPage:true})
    })

})