class HomePage{
    constructor(page){
        this.page=page
        this.btnLogoutButton="//button[normalize-space()='Logout']"
    }

    async clickOnLogoutButton(){
        await this.page.click(this.btnLogoutButton)
    }
}

module.exports = {HomePage}