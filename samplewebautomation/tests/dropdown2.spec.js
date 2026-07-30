const {test, expect} = require("@playwright/test")

test("Handle Dropdown functionality", async({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown#google_vignette")
    await page.waitForTimeout(3000)
    await page.locator("#country").scrollIntoViewIfNeeded() 
    await page.waitForTimeout(3000)
    const listContent=await page.locator("#country").textContent()
    console.log("List Content :"+listContent);
    await expect(listContent.includes("India")).toBeTruthy()
    await page.waitForTimeout(3000)
})