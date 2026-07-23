class HomePage{

    constructor(page){
        this.page=page
        this.btnLogoutButton=page.locator("//button[normalize-space()='Logout']")
    }

    async clickOnLogoutButton(){
        await this.btnLogoutButton.click()
    }
}

module.exports = {HomePage}