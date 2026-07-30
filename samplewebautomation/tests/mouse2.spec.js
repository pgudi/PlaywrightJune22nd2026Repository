const {test, expect} = require("@playwright/test")

test("Mouse Movement Functionality on Scroll", async ({page})=>{
    await page.goto("https://www.w3schools.com/")
    await page.waitForTimeout(3000)
    
    await page.locator("xpath=//a[normalize-space()='Learn Python']").scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)
    await page.screenshot({ path: 'w3schools_page.png' });
})