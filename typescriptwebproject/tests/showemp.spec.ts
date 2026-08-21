import {test, expect, request} from '@playwright/test'
let token:any
test("Authentication", async({request})=>{
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
    console.log("Token :"+token)
    
})

test("Display Employee using GET", async({request})=>{
    const response=await request.get("https://sgtestinginstitute.onrender.com/api/v1/employees/430",{
        
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+token
        }
    })
    const resposnebody=(await response.text()).toString()
    console.log("Employee Response :"+resposnebody)
    await expect(response.status()).toBe(200)
})