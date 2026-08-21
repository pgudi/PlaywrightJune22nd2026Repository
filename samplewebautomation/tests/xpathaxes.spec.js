const {test, expect} = require("@playwright/test")
//following-sibling
test("enter a Salary for a Person Sachin Tendulkar", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/WebTableHTML.html")
    await page.waitForTimeout(1000)
    await page.locator("//td[text()='Sachin Tendulkar']/following-sibling::td/following-sibling::td/following-sibling::td/following-sibling::td/input").fill("25000")
    await page.waitForTimeout(3000)
})

//following
test("enter a Salary for a Person Who is next to Rahul Dravid", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/WebTableHTML.html")
    await page.waitForTimeout(1000)
    await page.locator("//td[text()='Rahul Dravid']/following::tr[1]/td[6]/input").fill("26000")
    await page.waitForTimeout(3000)
})

//preceding-sibling
test("Make the status as Active for Indian Freedom Fighter", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/WebTableHTML.html")
    await page.waitForTimeout(1000)
    await page.locator("//td[text()='Indian Freedom Fighter']/preceding-sibling::td[1]/preceding-sibling::td[1]/input").click()
    await page.waitForTimeout(3000)
})

//preceding
test("Make the status as active for a person who is before Rahul Dravid", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/WebTableHTML.html")
    await page.waitForTimeout(1000)
    await page.locator("//td[text()='Rahul Dravid']/preceding::tr[1]/td[1]/input").click()
    await page.waitForTimeout(3000)
})

//ancestor
test("Based Salary edit field identify table and display id attribute of the table", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/WebTableHTML.html")
    await page.waitForTimeout(1000)
    const idvalue=await page.locator("//input[@id='edit4']/ancestor::td/ancestor::tr/ancestor::table").getAttribute("id")
    console.log("Id Attribute value of Table :"+idvalue);
    await page.waitForTimeout(3000)
})

//descandant
test.only("Based on Table for 3rd Row Select City name as Punjab", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/WebTableHTML.html")
    await page.waitForTimeout(1000)
    await page.locator("//table[@id='tbl1']/descendant::tr[3]/td[4]/select").selectOption({label:"Punjab"})
    await page.waitForTimeout(3000)
})