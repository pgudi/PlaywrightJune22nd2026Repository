const {test, expect} = require("@playwright/test")

test("Import Multiple Files", async({page})=>{
    await page.goto("https://html-file-upload.netlify.app/multiple/")
    await page.waitForTimeout(3000)

    await page.locator("#file-uploader").setInputFiles(["./import/Assignment.txt","./import/Assignment_Constructor.txt"])
    await page.waitForTimeout(3000)

    await expect(page.locator("//p[@id='feedback']")).toHaveText("2 file(s) uploaded successfully!")
})