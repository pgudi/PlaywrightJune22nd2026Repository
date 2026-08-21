const {test, expect} = require("@playwright/test")

test("Absolute XPath", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("xpath=html/body/div/form/input").first().fill("DemoUser1")
    await page.waitForTimeout(1000)
})

test("Relative XPath using TagName", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("xpath=//input").first().fill("DemoUser1")
    await page.waitForTimeout(1000)
})

test("Relative XPath using TagName and index", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("xpath=//input[1]").first().fill("DemoUser1")
    await page.waitForTimeout(1000)
})

test("Identify based on tagName with attributeName and Value combination", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("xpath=//input[@name='pass1word1']").fill("DemoUser1")
    await page.waitForTimeout(1000)
})

test("Identify based on  attributeName and Value combination", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("xpath=//*[@name='pass1word1']").fill("DemoUser1")
    await page.waitForTimeout(1000)
})

test("Identify based on  Attribute Value alone", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("xpath=//*[@*='pass1word1']").fill("DemoUser1")
    await page.waitForTimeout(1000)
})

test("Identify based on  Multiple Attribute Name and  Value", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("xpath=//input[@type='checkbox'][@name='windows']").click()
    await page.waitForTimeout(1000)
})

test("Identify based on  Multiple Attribute Name and  Value with and operator", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("xpath=//input[@type='checkbox' and @name='windows']").click()
    await page.waitForTimeout(1000)
})

test("Identify based on  Multiple Attribute Name and  Value with or operator", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("xpath=//input[@type='checkbox' or @name='windows']").click()
    await page.waitForTimeout(1000)
})

test("Based on Partial Matching of Attribute Value", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    //await page.locator("xpath=//input[starts-with(@id,'rad1')]").click()
    await page.locator("xpath=//input[contains(@id,'chrome')]").click()
    await page.waitForTimeout(2000)
})


test("Identify based on TagName and AttributeValue1", async({page})=>{
    // Find out Number of Links in the Application
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    const oLinks=await page.$$("xpath=//a[@href]")
    console.log("Number of Links :"+oLinks.length); 
    await page.waitForTimeout(2000)
})

test("Identify based on TagName and AttributeValue2", async({page})=>{
    // Display Link Names from the Application
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    const oLinks=await page.$$("xpath=//a[@href]")
    for(let i=0;i<oLinks.length;i++){
        const linkName=await oLinks[i].textContent()
        console.log("Link Name :"+linkName);
    }
    await page.waitForTimeout(2000)
})

test("Identify based on TagName and AttributeValue3", async({page})=>{
    // On click S G Software Testing Link
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    const oLinks=await page.$$("xpath=//a[@href]")
    for(let i=0;i<oLinks.length;i++){
        const linkName=await oLinks[i].textContent()
        if(linkName.endsWith("Testing")){
            await oLinks[i].click()
            break
        }
    }
    await page.waitForTimeout(2000)
})


test("Identify based on TagName and text Content", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(1000)
    await page.locator("xpath=//button[text()='Sign In']").click()
    await page.waitForTimeout(3000)
})

test("Identify based on TagName and normalize space text Content", async({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(1000)
    await page.locator("xpath=//button[normalize-space()='Sign In']").click()
    await page.waitForTimeout(3000)
})

test.only("Partial Matching of Text Content", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("xpath=//a[contains(text(),'Software')]").click()
    await page.waitForTimeout(3000)
})