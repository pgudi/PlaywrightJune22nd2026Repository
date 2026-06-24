const {test, expect} = require("@playwright/test")

test("Launch and Navigate Application URL", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
})