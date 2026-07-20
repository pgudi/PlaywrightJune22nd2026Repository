const {test, expect} = require("@playwright/test")

test("Invalid Login Action", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    await page.locator("css=input[name='username']").fill("pgudi123")
    await page.locator("xpath=//input[@name='password']").fill("pgudi123")
    await page.locator("xpath=//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(3000)
    const errorMessage=await page.locator("xpath=//p[normalize-space()='Invalid username or password']").textContent()
    await expect(errorMessage.includes("Invalid ")).toBeTruthy()
})