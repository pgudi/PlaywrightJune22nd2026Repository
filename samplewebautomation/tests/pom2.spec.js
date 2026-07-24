const {test, expect} = require("@playwright/test")
const {LoginPage} = require("./../pages2/loginpage")
const {HomePage} = require("./../pages2/homepage")

test("Page Object Model on Login Logout", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    // Create Object for LoginPage & HomePage
    const oLogin=new LoginPage(page)
    const oHome=new HomePage(page)

    // Login Action
    await oLogin.enterUserName("pgudi")
    await oLogin.enterPassword("pgudi")
    await oLogin.clickOnSignInButton()
    await page.waitForTimeout(3000)
    // Logout Action
    await oHome.clickOnLogoutButton()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/login123")
})