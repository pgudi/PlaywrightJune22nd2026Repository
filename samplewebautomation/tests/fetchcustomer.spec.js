const {test, expect} = require("@playwright/test")
let token;
test("Autntication Step", async({request})=>{
    const response=await request.post("https://sgtestinginstitute.onrender.com/api/v1/authenticate",{
        data:{
            "username": "pgudi",
            "password": "pgudi"
        },
        headers:{
            "Content-Type":"application/json"
        }
    })

    token=(await response.text()).toString()
    console.log("Token :"+token);
    
})

test("Fetch Specific Customer Step", async({request})=>{
    const response=await request.get("https://sgtestinginstitute.onrender.com/api/v1/customers/1099",{
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+token
        }
    })

    const responsebody=await response.json()
    console.log("Customer Id :"+responsebody.customerId);
    console.log("Customer Id :"+responsebody.customerName);
    const responseContent=await (await response.text()).toString()
    console.log("Response Content :"+responseContent);
    expect(response.status()).toBe(200)
    
})