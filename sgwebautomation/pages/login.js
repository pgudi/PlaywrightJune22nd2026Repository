
class Login{
    constructor(page){
        this.page=page
        this.txtUserName=page.locator("//input[@name='username']")
        this.txtPassword=page.locator("//input[@name='password']")
        this.btnSignInbutton=page.locator("//button[normalize-space()='Sign In']")
    }

    async enterUserName(username){
        await this.txtUserName.fill(username)
    }

    async enterPassword(password){
        await this.txtPassword.fill(password)
    }

    async clicksignInbutton(){
        await this.btnSignInbutton.click()
    }
}

module.exports = {Login}