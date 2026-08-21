import {test, expect} from "@playwright/test"

test("Handle Alert Dialog", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(3000)
    page.on("dialog", async(alertDialog)=>{
        const message=await alertDialog.message()
        console.log("Alert Message :"+message)
        await alertDialog.accept("WELCOME PLAYWRIGHT")
    })
    await page.locator("//button[normalize-space()='Click for JS Prompt']").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//p[@id='result']")).toHaveText("You entered: WELCOME PLAYWRIGHT")
})