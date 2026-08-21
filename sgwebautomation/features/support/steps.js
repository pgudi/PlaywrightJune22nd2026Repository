const { Given, When, Then } = require('@cucumber/cucumber')
const { chromium, expect } = require("@playwright/test")
const datavalid = require("./../../datafiles/login_valid.json")
const datainvalid = require("./../../datafiles/login_invalid.json")
const datacustomer = require("./../../datafiles/data_customer.json") 



When('I navigate application url', async function () {
    await this.page.goto("https://sgtestinginstituteapp.onrender.com/")
});

Then('I find login page', async function () {
    await expect(this.page).toHaveURL("https://sgtestinginstituteapp.onrender.com/login")
});

When('I enter username in username text field', async function () {
    //await this.page.locator("//input[@name='username']").fill(datavalid.username)
    await this.login.enterUserName(datavalid.username)
});

When('I enter password in password text field', async function () {
    //await this.page.locator("//input[@name='password']").fill(datavalid.password)
    await this.login.enterPassword(datavalid.password)
});

When('I click on singin button in login page', async function () {
   /// await this.page.locator("//button[normalize-space()='Sign In']").click()
   await this.login.clicksignInbutton()
});

Then('I find the home page', async function () {
    const homeContent = this.page.locator("//h2[normalize-space()='S G Software Testing Institute']")
    await expect(homeContent).toHaveText("S G Software Testing Institute")
});

When("I enter invalid username in username text field", async function(){
    //await this.page.locator("//input[@name='username']").fill(datainvalid.username)
    await this.login.enterUserName(datainvalid.username)
})

When("I enter invalid password in password text field", async function(){
   // await this.page.locator("//input[@name='password']").fill(datainvalid.password)
   await this.login.enterPassword(datainvalid.password)
})

Then("I find error message Invalid username or password", async function(){
    const errorMessage=await this.page.locator("//p[normalize-space()='Invalid username or password']").textContent()
    await expect(errorMessage.includes("Invalid username or password")).toBeTruthy()
})

When("I click on logout link", async function(){
    //await this.page.locator("//button[normalize-space()='Logout']").click()
    await this.home.clickOnLogoutLink()
})

When('I enter {string} in username text field', async function (username) {
    //await this.page.locator("//input[@name='username']").fill(username)
    await this.login.enterUserName(username)
});

When('I enter {string} in password text field', async function (password) {
    //await this.page.locator("//input[@name='password']").fill(password)
    await this.login.enterPassword(password)
});


When('I click on customers menu',async function () {
    await this.customer.clickOnCustomersMenu()
});

Then('I find add customers button', async function () {
   await expect(this.customer.btnAddCustomerButton).toBeVisible()
});

When('I click on add customers button', async function () {
   await this.customer.clickOnAddCustomersButton()
});

Then('I find add customers form', async function () {
   await expect(this.customer.formAddCustomersForm).toBeVisible()
});

When('I enter customername in customer name text field', async function () {
  await this.customer.enterCustomerName(datacustomer.customername)
});

When('I enter customeremail in customer emailid text field', async function () {
  await this.customer.enterCustomerEmailId(datacustomer.customeremail)
});

When('I enter customerlocation in customer location text field', async function () {
  await this.customer.enterCustomerLocation(datacustomer.customerlocation)
});

When('I enter customerdescription in customer description text field', async function () {
  await this.customer.enterCustomerDescription(datacustomer.custoemrdescription)
});

When('I click on save button in create customer page', async function () {
  await this.customer.clickOnSaveCustomerButton()
});

Then('I find newly created customer',async function () {
  let cname=datacustomer.customername
  let custname="//td[text()='"+cname+"']"
  console.log("Customer Name XPath :"+custname);
  const objCustomer=await this.page.locator(custname)
  await expect(objCustomer).toBeVisible()  
});

When('I delete newly created customer',async function () {
  let cname=datacustomer.customername
  let deleteCustname="//td[text()='"+cname+"']/following-sibling::td/following-sibling::td/following-sibling::td/following-sibling::td/button[2]"
  console.log("Customer Name XPath :"+deleteCustname);
  await this.page.on("dialog", async(dialog)=>{
    const message=await dialog.message()
    console.log("Alert Message :"+message);
    await dialog.accept()
  })
  await this.page.locator(deleteCustname).click()
});

Then('I do not find newly created customer', async function () {
  let cname=datacustomer.customername
  let custname="//td[text()='"+cname+"']"
  console.log("Customer Name XPath :"+custname);
  await expect(await this.page.locator(custname)).not.toBeVisible()
});