/*
    End-To-End Scenario:
    login -> CreateCustomer -> DeleteCustomer -> Logout
*/
const {test, expect}=require("@playwright/test")

test("Customer Scenario", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)
    //Login Action
    await page.locator("//input[@name='username']").fill("pgudi")
    await page.locator("//input[@name='password']").fill("pgudi")
    await page.locator("//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/home")
    //Create Customer Action
    await page.locator("xpath=//a[normalize-space()='Customers']").click()
    await page.locator("//a[normalize-space()='Add Customer']").click()
    await page.waitForTimeout(1000)
    await page.locator("xpath=(//input[@type='text'])[1]").fill("auto_demo_01")
    await page.locator("xpath=(//input[@type='email'])[1]").fill("auto_demo_01@sg.com")
    await page.locator("xpath=(//input[@type='text'])[2]").fill("California")
    await page.locator("xpath=(//input[@type='text'])[3]").fill("Testing Purpose")
    await page.waitForTimeout(1000)
    await page.locator("//button[normalize-space()='Save']").click()
    await page.waitForTimeout(3000)
    // Delete Customer Action 
    page.on("dialog", async(alertWindow)=>{
        const message=alertWindow.message()
        console.log("Alert Content :"+message);
        await alertWindow.accept()
    })
    await page.locator("//td[text()='auto_demo_01']/following-sibling::td[4]/button[2]").click()
    await page.waitForTimeout(3000)

    // Logout Action
    await page.locator(".btn.btn-outline-light").click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/login")
})