import {test, expect} from '@playwright/test'

test("Login Functionality", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    // Login ACtion
    await page.locator("//input[@name='username']").fill("pgudi")
    await page.locator("//input[@name='password']").fill("pgudi")
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//h2[normalize-space()='S G Software Testing Institute']")).toBeVisible()
})