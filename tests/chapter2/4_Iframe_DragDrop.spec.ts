import {test,expect} from '@playwright/test'


test("Validating the dropdown",async({page})=>{

   await page.goto("https://jqueryui.com/droppable/")

   // if the locators are under iframe, then first we have to locate iframe and store it 

   const iframe = page.frameLocator("[class='demo-frame']")

   // Now the item you want to drag

   const drag = iframe.locator("[id='draggable']")

   // Now the item where you have to drop

   const drop = iframe.locator("[id='droppable']")

   // now dragging

   await drag.dragTo(drop)
})