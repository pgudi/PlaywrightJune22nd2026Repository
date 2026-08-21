import {Page, Locator} from '@playwright/test'

export class HomePage{
    page:Page;
    lnkLogoutLink:Locator
    constructor(page:Page){
        this.page=page
        this.lnkLogoutLink=page.locator("//button[normalize-space()='Logout']")
    }

    async clickLogoutLink(){
        await this.lnkLogoutLink.click()
    }
}