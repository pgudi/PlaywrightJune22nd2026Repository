
class Home{
    constructor(page){
        this.page =page
        this.lnkLogountLink=page.locator("//button[normalize-space()='Logout']")
    }

    async clickOnLogoutLink(){
        await this.lnkLogountLink.click()
    }
}

module.exports = {Home}