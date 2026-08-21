import {test, expect, Locator, FrameLocator} from "@playwright/test"

test("Handling Frames", async({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    await page.waitForTimeout(3000)

    const Frame1:FrameLocator=await page.frameLocator("//frame[@name='packageListFrame']")
    await Frame1.locator("//a[normalize-space()='java.awt']").first().click()
    await page.waitForTimeout(3000)

    const Frame2:FrameLocator=await page.frameLocator("//frame[@name='packageFrame']")
    await Frame2.locator("//span[normalize-space()='ActiveEvent']").click()
    await page.waitForTimeout(3000)

    const Frame3:FrameLocator=await page.frameLocator("//frame[@name='classFrame']")
    const content:any=await Frame3.locator("//div[@class='description']//div[1]").textContent()
    console.log(content);
})