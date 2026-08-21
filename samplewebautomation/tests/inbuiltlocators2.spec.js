const {test, expect} = require("@playwright/test")

test.skip("Inbuilt Locators 1", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    // const content=await page.getByLabel("User Name").textContent()
    // console.log("Label Text :"+content);
    
    await expect(page.getByLabel("User Name")).toBeVisible()
    await page.waitForTimeout(3000)
})

test("Inbuilt Locators title", async({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    await page.waitForTimeout(3000)
    const oFrame=await page.frameLocator("//frame[@name='packageFrame']")
    await oFrame.getByTitle("class in javax.swing").first().click()
    await page.waitForTimeout(3000)
})