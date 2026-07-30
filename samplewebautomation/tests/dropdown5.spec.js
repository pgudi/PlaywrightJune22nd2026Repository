const {test, expect} = require("@playwright/test")

test("Multi select drop down handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000)

    await page.locator("#country").scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

    const listCountries=await page.$("#country")
    const eachCountry=await listCountries.$$("option")
    console.log("Number of Countries :"+eachCountry.length);

    for(let i=0;i<eachCountry.length;i++){
        const countryname=await eachCountry[i].textContent()
        console.log("Country Name :"+countryname);
        if(countryname=="India"){
            await expect(countryname.includes("India")).toBeTruthy()
            break
        }
        
    }
})