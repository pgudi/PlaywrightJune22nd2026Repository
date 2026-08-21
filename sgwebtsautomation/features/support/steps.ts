import {Given, When, Then} from '@cucumber/cucumber'
import {chromium, expect} from '@playwright/test'
let page;

Given('I launch chromium browser', async function(){
    const browser=await chromium.launch({
        headless:false
    })
    const context=await browser.newContext()
    this.page=await context.newPage()
})
When('I navigate application url', async function () {
    await this.page.goto("https://sgtestinginstituteapp.onrender.com/")
});

Then('I find the login page', async function () {
   await expect(this.page).toHaveTitle("S G Software Testing Institute")
});

When('I enter username in username text field', async function () {
  await this.page.locator("//input[@name='username']").fill("pgudi")
});

When('I enter password in password text field', async function () {
  await this.page.locator("//input[@name='password']").fill("pgudi")
});

When('I clcik signin button', async function () {
  await this.page.locator("//button[normalize-space()='Sign In']").click()
});

Then('I find home page', async function () {
  await expect(this.page.locator("//h2[normalize-space()='S G Software Testing Institute']")).toHaveText("S G Software Testing Institute")
});