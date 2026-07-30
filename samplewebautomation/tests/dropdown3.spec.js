const {test, expect} = require("@playwright/test")

test("Handle Dropdown functionality", async({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown#google_vignette")
    await page.waitForTimeout(3000)
    await page.locator("#country").scrollIntoViewIfNeeded() 
    await page.waitForTimeout(3000)
    const listContent=await page.locator("#country").allTextContents()
    console.log("All Items in Drop Down :"+listContent[0]);
    const items = listContent[0].toString().split("\n")
    console.log("All Items :"+items);
    
    console.log("Number of Elements in Dropdown :"+items.length);
    await expect(items.length).toBeGreaterThan(10)
    await page.waitForTimeout(3000)
})