import {test, expect} from '@playwright/test'
import {LoginPage} from './../pages/loginpage'
import {HomePage} from './../pages/homepage'

test("Login Logout Page Object Model", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    //Login Action
    let login=new LoginPage(page)
    await login.setUserNameTextField("pgudi")
    await login.setPasswordTextField("pgudi")
    await login.clickSignInbutton()
    await page.waitForTimeout(3000)
    // Logout Action
    let home=new HomePage(page)
    await home.clickLogoutLink()
    await page.waitForTimeout(3000)
})