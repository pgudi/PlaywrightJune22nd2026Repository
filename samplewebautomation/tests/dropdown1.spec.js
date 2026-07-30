const {test, expect} = require("@playwright/test")

test("Handle Dropdown functionality", async({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown#google_vignette")
    await page.waitForTimeout(3000)
    await page.locator("#country").scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)
    await page.locator("#country").selectOption({label :"India"})
    await page.waitForTimeout(3000)
    await page.locator("#country").selectOption({value :"JP"})
    await page.waitForTimeout(3000)
    await page.locator("#country").selectOption({index :4})
    await page.waitForTimeout(3000)
})