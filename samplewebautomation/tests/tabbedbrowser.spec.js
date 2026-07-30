const {test, expect} = require("@playwright/test")
let page
test("Handle Tabbed Browsers", async({browser})=>{
    const context=await browser.newContext()
    page=await context.newPage()
    await page.goto("https://gowrisoftsolutions.com/")
    await page.waitForTimeout(3000)

    const [newPage]=await Promise.all(
        [
            context.waitForEvent("page"),
            await page.locator("(//i[@class='fa fa-facebook'])[1]").click()
        ]
    )
    const title=await newPage.title()
    console.log("Title of New Child Brwoser :"+title);
    const url=await newPage.url()
    console.log("URL of New Child Brwoser :"+url);
    await newPage.locator("(//span[@class='x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft x1j85h84'][normalize-space()='Log in'])[1]").click()
    await page.waitForTimeout(3000)
    await newPage.close()
    await page.locator("//a[normalize-space()='Contact Us']").click()
    await page.waitForTimeout(3000)
    const title1=await page.title()
    console.log("Title of Parent Brwoser :"+title1);
    const url1=await page.url()
    console.log("URL of Parent Brwoser :"+url1);
    await page.waitForTimeout(3000)
})