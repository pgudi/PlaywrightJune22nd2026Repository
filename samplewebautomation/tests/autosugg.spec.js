const {test, expect} = require("@playwright/test")

test("Auto Suggestion using Keyboard", async({page})=>{
    await page.goto("https://www.google.com/")
    await page.waitForTimeout(3000)
    await page.locator("#APjFqb").fill("Playwright Automation")
    await page.waitForTimeout(3000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
})

test("Auto Suggestion using Keyboard Amazon", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(3000)
    await page.locator("#twotabsearchtextbox").fill("Smart Phone")
    await page.waitForTimeout(3000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(1000)
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
})

test.only("Auto Suggestion using program", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(3000)
    await page.locator("#twotabsearchtextbox").fill("Smart Phone")
    await page.waitForTimeout(3000)
    await page.waitForSelector("//div[@role='row']")
    await page.waitForTimeout(3000)
    const arrSugggestions=await page.$$("//div[@role='row']")
    for(let i=0;i<arrSugggestions.length;i++){
        const textContent=await arrSugggestions[i].textContent()
        if(textContent.includes("smart phone under 15000 5g mobile")){
            await arrSugggestions[i].click()
            break
        }
    }
    await page.waitForTimeout(3000)
})