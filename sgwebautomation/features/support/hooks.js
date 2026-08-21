
const {Before, After} = require("@cucumber/cucumber")
const {Login} = require("./../../pages/login")
const {Home} = require("./../../pages/home")
const {Customers} = require("./../../pages/customers")
const { chromium, expect } = require("@playwright/test")
let page, context;
Before(async function () {
    const browser = await chromium.launch({
        headless: false
    })
    const context = await browser.newContext()
    this.page = await context.newPage()
    //Login Page Object Creation
    this.login=new Login(this.page)
    //Home Page Object Creation
    this.home=new Home(this.page)
    //Customer Page Object Creation
    this.customer=new Customers(this.page)
});

After(async function(){
    await this.page.close
})