const {test, expect} = require("@playwright/test")
const {LoginPage} = require("./../pages/loginpage")
const {HomePage} = require("./../pages/homepage")

test("Login & Logout using Page Object Model", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    // Create Objects for Each Page Class
    let oLogin=new LoginPage(page)
    let oHome=new HomePage(page)

    // Login Action
    await oLogin.enterUsername("pgudi")
    await oLogin.enterPassword("pgudi")
    await oLogin.clickSignInbutton()
    await page.waitForTimeout(3000)

    // Logout Action
    oHome.clickOnLogoutButton()
    await page.waitForTimeout(3000)

})