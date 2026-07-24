class LoginPage{
    constructor(page){
        this.page=page
        this.txtUserName="//input[@name='username']"
        this.txtPassword="//input[@name='password']"
        this.btnSignInButton="//button[normalize-space()='Sign In']"
    }

    async enterUserName(username){
        await this.page.fill(this.txtUserName, username)
    }

    async enterPassword(pwd){
        await this.page.fill(this.txtPassword, pwd)
    }

    async clickOnSignInButton(){
        await this.page.click(this.btnSignInButton)
    }
}

module.exports = {LoginPage}