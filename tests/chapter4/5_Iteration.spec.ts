import { test, expect } from '@playwright/test'

test('Iteration', async ({ page }) => {

    await page.goto('https://github.com/Aditya-1406')

    const repo = await page.$$(".repo")

    console.log("For of loop")

    for(const rep of repo){
        const repName = await rep.textContent();
        console.log(repName);
    }
    console.log()
    console.log("For loop")

    for(let i = 0; i<repo.length;i++){
        const repName = await repo[i].textContent();
        console.log(repName);
    }

    console.log()
    console.log("using loop + nth")

    const repo2 = page.locator(".repo");
    const count = await repo2.count();

    for(let i = 0; i<count;i++){
        const repName = await repo2.nth(i).textContent();
        console.log(repName);
    }



})