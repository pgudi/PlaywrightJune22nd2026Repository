const {test, expect} = require("@playwright/test")

test("Login Functionality Testcase", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    const url=await page.url()
    console.log("Application URL :"+url);
    const title=await page.title()
    console.log("Application Title:"+title);
    
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/login")
    await expect(page).toHaveTitle("S G Software Testing Institute")
})