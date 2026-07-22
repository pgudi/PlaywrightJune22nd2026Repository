const {test, expect}=require("@playwright/test")

test("Handle Alerts", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(3000)

    page.on("dialog", async(alertDialog)=>{
        await expect(alertDialog.type()).toContain("alert")
        const content=await alertDialog.message()
        console.log("Alert Content :"+content);
        await expect(content).toContain("I am a JS Alert")
        await alertDialog.accept()
    })

    await page.locator("xpath=//button[normalize-space()='Click for JS Alert']").click()
    await page.waitForTimeout(3000)
    const resultMessage=await page.locator("(//p[@id='result'])[1]").textContent()
    await expect(resultMessage.includes("You successfully clicked an alert")).toBeTruthy()
})

test("Handle Confirm", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(3000)

    page.on("dialog", async(alertDialog)=>{
        await expect(alertDialog.type()).toContain("confirm")
        const content=await alertDialog.message()
        console.log("Alert Content :"+content);
        await expect(content).toContain("I am a JS Confirm")
        await alertDialog.accept()
    })

    await page.locator("xpath=//button[normalize-space()='Click for JS Confirm']").click()
    await page.waitForTimeout(3000)
    const resultMessage=await page.locator("(//p[@id='result'])[1]").textContent()
    await expect(resultMessage.includes("You clicked: Ok")).toBeTruthy()
})

test.only("Handle Prompt", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(3000)

    page.on("dialog", async(alertDialog)=>{
        await expect(alertDialog.type()).toContain("prompt")
        const content=await alertDialog.message()
        console.log("Alert Content :"+content);
        await expect(content).toContain("I am a JS prompt")
        await alertDialog.accept("WELCOME PALYWRIGHT")
    })

    await page.locator("xpath=//button[normalize-space()='Click for JS Prompt']").click()
    await page.waitForTimeout(3000)
    const resultMessage=await page.locator("(//p[@id='result'])[1]").textContent()
    await expect(resultMessage.includes("You entered: WELCOME PALYWRIGHT")).toBeTruthy()
})