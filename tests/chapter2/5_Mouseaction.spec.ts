import {test,expect} from '@playwright/test'

test("Handling the mouse actions", async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")

    // left click 

    await page.getByRole('link',{name:"PlaywrightPractice"}).click({button:"left"})
    await page.waitForTimeout(3000)
    await page.goBack()

    //middle click
    await page.getByRole('link',{name:"PlaywrightPractice"}).click({button:"middle"})
    await page.waitForTimeout(3000)

    // right click

    await page.getByRole('link',{name:"PlaywrightPractice"}).click({button:"right"})
    await page.waitForTimeout(3000)

   

    // hover 
    await page.getByRole('button',{name:"Point Me"}).hover()
    await page.waitForTimeout(3000)

    // double click 

    await page.getByRole('button',{name:"Copy Text"}).dblclick()
    await page.waitForTimeout(3000)

})