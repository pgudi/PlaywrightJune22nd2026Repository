const {test, expect}=require("@playwright/test")

test("Import File using Absolute Path", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.waitForTimeout(3000)

    await page.locator("#file-upload").setInputFiles("C:/PlaywrightQAAutomation2/CurrentWorkspace/PlaywrightJune22nd2026Repository/samplewebautomation/import/Assignment.txt")
    await page.waitForTimeout(3000)
    await page.locator("#file-submit").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//h3[text()='File Uploaded!']")).toHaveText("File Uploaded!")
    const filename=await page.locator("#uploaded-files").textContent()
    await expect(filename.includes(".txt")).toBeTruthy()
})

test.only("Import File using Relative Path", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.waitForTimeout(3000)

    await page.locator("#file-upload").setInputFiles("./import/Assignment_Constructor.txt")
    await page.waitForTimeout(3000)
    await page.locator("#file-submit").click()
    await page.waitForTimeout(3000)
    await expect(page.locator("//h3[text()='File Uploaded!']")).toHaveText("File Uploaded!")
    const filename=await page.locator("#uploaded-files").textContent()
    await expect(filename.includes(".txt")).toBeTruthy()
})