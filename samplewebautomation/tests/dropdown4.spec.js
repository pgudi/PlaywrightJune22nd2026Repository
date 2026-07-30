const {test, expect} = require("@playwright/test")

test("Multi select drop down handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)

    await page.locator("#colors").scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    await page.locator("#colors").selectOption(["Blue","Green","Yellow"])
    await page.waitForTimeout(3000)
})