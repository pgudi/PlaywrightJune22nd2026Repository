const {test, expect} = require("@playwright/test")

test("Without Locator Function", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    await page.fill("//input[@name='username']","pgudi")
    await page.fill("//input[@name='password']","pgudi")
    await page.click("//button[normalize-space()='Sign In']")
    await page.waitForTimeout(3000)
})