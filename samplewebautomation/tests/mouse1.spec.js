const {test, expect} = require("@playwright/test")

test("Mouse Movement Functionality", async ({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(3000)
    await page.locator("xpath=//span[text()='✕']").click()
    await page.waitForTimeout(2000)
    await page.locator("xpath=//span[normalize-space()='Login']").hover()
    await page.waitForTimeout(3000)
    await page.locator("xpath=//div[contains(text(),'Gift Cards')]").click()
    await expect(page).toHaveURL("https://www.flipkart.com/the-gift-card-store?link=home_giftcard")
})