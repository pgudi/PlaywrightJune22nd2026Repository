const {Given, When, Then} =require("@cucumber/cucumber")
const {request, expect} = require("@playwright/test")
let apiRequest;
let token="";
let response;
Given('I authenticate user to generate Token', async function () {
  apiRequest=await request.newContext()
  response=await apiRequest.post("https://sgtestinginstitute.onrender.com/api/v1/authenticate",{
    data:{
        "username": "pgudi",
        "password": "pgudi"
    },
    headers:{
        "Content-Type":"application/json"
    }
  })
  token=(await response.text()).toString()
  console.log("Auth Token :"+token)
  await expect(response.status()).toBe(200)
});

When('I provide GET HTTP Method for Customer and get the Response', async function () {
    response=await apiRequest.get("https://sgtestinginstitute.onrender.com/api/v1/customers/16",{
        headers:{
        "Content-Type":"application/json",
        "authorization":"Bearer "+token
    }
    })
    const customerJson=await response.json()
    console.log("Customer Response in JSON Format :"+customerJson)
    await expect(customerJson.customerId).toBe(16)
    
});

When('I display response in console', async function () {
  const resposneContent=(await response.text()).toString()
  console.log("Customer Resposne :"+resposneContent);
  
});

Then('I get the 200 status Code', async function () {
  await expect(response.status()).toBe(200)
});

