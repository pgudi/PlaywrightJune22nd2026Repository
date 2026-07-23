class LoginPage{
    constructor(page){
        this.page=page
        this.txtUsername=page.locator("//input[@name='username']")
        this.txtPassword=page.locator("//input[@name='password']")
        this.btnSignIn=page.locator("//button[normalize-space()='Sign In']")
    }

    async enterUsername(username){
        await this.txtUsername.fill(username)
    }

    async enterPassword(pwd){
        await this.txtPassword.fill(pwd)
    }

    async clickSignInbutton(){
        await this.btnSignIn.click()
    }
}

module.exports = {LoginPage}