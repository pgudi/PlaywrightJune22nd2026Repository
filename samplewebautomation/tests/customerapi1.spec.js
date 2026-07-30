const { test, expect } = require("@playwright/test")

let token;
let custId;
test.describe.serial("Customer Create Scenatio", async () => {
    test("Autntication Step", async ({ request }) => {
        const response = await request.post("https://sgtestinginstitute.onrender.com/api/v1/authenticate", {
            data: {
                "username": "pgudi",
                "password": "pgudi"
            },
            headers: {
                "Content-Type": "application/json"
            }
        })

        token = (await response.text()).toString()
        console.log("Token :" + token);
    })

    test("Create Customer Step", async ({ request }) => {
        const response = await request.post("https://sgtestinginstitute.onrender.com/api/v1/customers", {
            data: {
                "customerName": "auto_demo01",
                "emailId": "auto_demo01@sg.com",
                "location": "California",
                "customerDescription": "It provides Services"
            },
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })

        const responsejson = await response.json()
        custId = await responsejson.customerId
        const responseBody = await (await response.text()).toString()
        console.log("Custoemr Response Body :" + responseBody);
        await expect(response.status()).toBe(201)
    })

    test("Display Specific Customer Step", async ({ request }) => {
        const response = await request.get("https://sgtestinginstitute.onrender.com/api/v1/customers/" + custId, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })

        const responsebody = await response.json()
        console.log("Customer Id :" + responsebody.customerId);
        console.log("Customer Id :" + responsebody.customerName);
        const responseContent = await (await response.text()).toString()
        console.log("Response Content :" + responseContent);
        expect(response.status()).toBe(200)

    })

    test("Delete Specific Customer Step", async ({ request }) => {
        const response = await request.delete("https://sgtestinginstitute.onrender.com/api/v1/customers/" + custId, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        const responseContent = await (await response.text()).toString()
        console.log("Response Content :" + responseContent);
        expect(response.status()).toBe(200)

    })
})
