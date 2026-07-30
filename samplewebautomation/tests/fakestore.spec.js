const {test, expect} = require("@playwright/test")
const { request } = require("node:http")

test("display a Specific Product ", async({request})=>{
    const response=await request.get("https://fakestoreapi.com/products/3",{
        headers:{
            "Content-Type":"application/json"
        }
    })
    const responseContent=(await response.text()).toString()
    console.log("Respose Content :"+responseContent);
    await expect(response.status()).toBe(200)
})


test("find Count of Products ", async({request})=>{
    const response=await request.get("https://fakestoreapi.com/products",{
        headers:{
            "Content-Type":"application/json"
        }
    })
    const responsebody=await response.json()
    console.log("Number of Products :"+responsebody.length);
    
    let count=0
    for(let data of responsebody){
        count=count+1
        
    }
    console.log("Number of Products Available :"+count);
    
    await expect(response.status()).toBe(200)
})

test("Display All Products Title ", async({request})=>{
    const response=await request.get("https://fakestoreapi.com/products",{
        headers:{
            "Content-Type":"application/json"
        }
    })
    const responsebody=await response.json()
      
    for(let data of responsebody){
        console.log(data.title);
    }
   
    await expect(response.status()).toBe(200)
})

test.only("Sum of All Products Prices ", async({request})=>{
    const response=await request.get("https://fakestoreapi.com/products",{
        headers:{
            "Content-Type":"application/json"
        }
    })
    const responsebody=await response.json()
    let sum=0
    for(let data of responsebody){
        sum=sum+data.price
    }
    console.log("Sum of All Products Price :"+sum);
    
    await expect(response.status()).toBe(200)
})