const {test, expect} = require("@playwright/test")

test("Locators at Proeprty Level", async({page})=>{
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(3000)
 //   await page.locator("id=username").fill("admin")
    await page.fill("id=username","admin")
    await page.waitForTimeout(2000)
})