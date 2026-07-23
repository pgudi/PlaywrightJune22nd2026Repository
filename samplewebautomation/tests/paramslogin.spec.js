const {test, expect} = require("@playwright/test")
import testdata from './../datafiles/login.json'
const testdata1 = require("./../datafiles/multiple.json")

test("Login Functionality with Test Data", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    await page.locator("//input[@name='username']").fill(testdata.username)
    await page.locator("//input[@name='password']").fill(testdata.password)
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/home")
    await page.locator(".btn.btn-outline-light").click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/login")
})

test.only("Login Functionality for Multiple Test Data", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    for(let data of testdata1){
        await page.locator("//input[@name='username']").fill(data.username)
        await page.locator("//input[@name='password']").fill(data.password)
        await page.locator("//button[normalize-space()='Sign In']").click()
        await page.waitForTimeout(3000)
        await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/home")
        await page.locator(".btn.btn-outline-light").click()
        await page.waitForTimeout(3000)
        await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/login")
    }
})