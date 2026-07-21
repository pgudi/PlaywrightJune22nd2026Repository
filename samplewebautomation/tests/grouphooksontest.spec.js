const { test, expect } = require("@playwright/test")
let page, context
test.beforeAll(async ({ browser }) => {
    context = await browser.newContext()
    page = await context.newPage()
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
})

test.afterAll(async () => {
    await page.close()
    await context.close()
})

test.describe.serial("Regresson Tests", async () => {

    test("Login and Logout from the Application Scenario1", async () => {

        await page.locator("xpath=//input[@name='username']").fill("pgudi")
        await page.locator("css=input[name='password']").fill("pgudi")
        await page.locator("xpath=//button[normalize-space()='Sign In']").click()
        await page.waitForTimeout(3000)
        await expect(page).toHaveTitle("S G Software Testing Institute")
        await page.locator("xpath=//button[normalize-space()='Logout']").click()
        await page.waitForTimeout(3000)
        await expect(page).toHaveTitle("S G Software Testing Institute")
    })

    test("Login and Logout from the Application Scenario2", async () => {

        await page.locator("xpath=//input[@name='username']").fill("pgudi")
        await page.locator("css=input[name='password']").fill("pgudi")
        await page.locator("xpath=//button[normalize-space()='Sign In']").click()
        await page.waitForTimeout(3000)
        await expect(page).toHaveTitle("S G Software Testing Institute")
        await page.locator("xpath=//button[normalize-space()='Logout']").click()
        await page.waitForTimeout(3000)
        await expect(page).toHaveTitle("S G Software Testing Institute")
    })


})
