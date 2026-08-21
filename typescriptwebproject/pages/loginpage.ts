import {Page, Locator} from '@playwright/test'
export class LoginPage{
    page:Page;
    txtUserNameTextField:Locator;
    txtPasswordTextField:Locator
    btnSignInButton:Locator

    constructor(page:Page){
        this.page=page
        this.txtUserNameTextField=page.locator("//input[@name='username']")
        this.txtPasswordTextField=page.locator("//input[@name='password']")
        this.btnSignInButton=page.locator("//button[normalize-space()='Sign In']")
    }

    async setUserNameTextField(username:string){
        await this.txtUserNameTextField.fill(username)
    }

    async setPasswordTextField(password:string){
        await this.txtPasswordTextField.fill(password)
    }

    async clickSignInbutton(){
        await this.btnSignInButton.click()
    }
}