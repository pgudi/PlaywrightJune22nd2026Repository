const {test, expect} = require("@playwright/test")

test("Absolute CSS", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("css=html body div form input").first().fill("DemoUser1")
    await page.waitForTimeout(3000)
})

test("Identify Element based on tagName", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("css=input").first().fill("DemoUser1")
    await page.waitForTimeout(3000)
})

test("Identify based on tagName with id attribute", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("css=input#pwd1pass1word1").fill("DemoUser123")
    await page.waitForTimeout(3000)
})

test("Identify based on id attribute value", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("css=#pwd1pass1word1").fill("DemoUser12345")
    await page.waitForTimeout(3000)
})

test("Identify based on tagName with class attribute value", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("css=input.windows").click()
    await page.waitForTimeout(3000)
})

test("Identify based on class attribute value", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("css=.linus").click()
    await page.waitForTimeout(3000)
})


test("Identify the Element based on tagName with attribute Name and Attribute Value", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("css=input[name='chrome']").click()
    await page.waitForTimeout(3000)
})

test("Identify the Element based on tagName with Multiple attribute Name and Attribute Value", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("css=input[type='radio'][name='firefox']").click()
    await page.waitForTimeout(3000)
})

test("Identify the Element based on tagName with partial attribute value", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    //await page.locator("css=input[id ^= 'chk1']").click()
    await page.locator("css=input[id *= 'chk1']").click()
    await page.waitForTimeout(3000)
})

test("Identify the Element based on tagName with attributeName1", async({page})=>{
    // find number of links in the Application
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    const oLinks=await page.$$("css=a[href]")
    console.log("Number of Links in the Application:"+await oLinks.length);
    
    await page.waitForTimeout(3000)
})

test("Identify the Element based on tagName with attributeName2", async({page})=>{
    // Display All availalbe link Names in the Application
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    const oLinks=await page.$$("css=a[href]")
    for(let i=0;i<oLinks.length;i++){
        const linkName=await oLinks[i].textContent()
        console.log("Link Name :"+linkName);
    }
    
    await page.waitForTimeout(3000)
})

test("Identify the Element based on tagName with attributeName3", async({page})=>{
    // Click on Specific link Name in the Application
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    const oLinks=await page.$$("css=a[href]")
    for(let i=0;i<oLinks.length;i++){
        const linkName=await oLinks[i].textContent()
        if(linkName.includes("Software")){
            await oLinks[i].click()
            break
        }
    }
    
    await page.waitForTimeout(3000)
})

test.only("Identify Element based on nth-child", async({page})=>{
    await page.goto("file:///C:/AutomationBackupFolders/Demo/Sample.html")
    await page.waitForTimeout(1000)
    await page.locator("css=form#frm3 :nth-child(4)").fill("DemoUser04")
    await page.waitForTimeout(3000)
})