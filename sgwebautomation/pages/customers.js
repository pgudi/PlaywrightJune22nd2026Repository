class Customers{
    constructor(page){
        this.page=page
        this.menuCustomersMenu=page.locator("//a[normalize-space()='Customers']")
        this.btnAddCustomerButton=page.locator("//a[normalize-space()='Add Customer']")
        this.formAddCustomersForm=page.locator("//h3[normalize-space()='Add Customer']")
        this.txtCustomerName=page.locator("//input[@placeholder='Enter Customer Name']")
        this.txtCustomereEmailId=page.locator("//input[@placeholder='Enter EmailId']")
        this.txtCustomerLocation=page.locator("//input[@placeholder='Enter Location']")
        this.txtCustomerDescription=page.locator("//input[@placeholder='Enter Description']")
        this.btnSaveCustomerButton=page.locator("//button[normalize-space()='Save']")
    }

    async clickOnCustomersMenu(){
        await this.menuCustomersMenu.click()
    }

    async clickOnAddCustomersButton(){
        await this.btnAddCustomerButton.click()
    }

    async enterCustomerName(customername){
        await this.txtCustomerName.fill(customername)
    }

    async enterCustomerEmailId(emailid){
        await this.txtCustomereEmailId.fill(emailid)
    }

    async enterCustomerLocation(location){
        await this.txtCustomerLocation.fill(location)
    }

    async enterCustomerDescription(description){
        await this.txtCustomerDescription.fill(description)
    }

    async clickOnSaveCustomerButton(){
       await this.btnSaveCustomerButton.click()
    }
}

module.exports = {Customers}