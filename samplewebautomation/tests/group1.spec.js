const {test, expect} = require("@playwright/test")

test.describe("Sanity Tests",async()=>{
    test("First Scanity Test", async({page})=>{
        console.log("It is a First Sanity Testcase");
    })

    test("Second Scanity Test", async({page})=>{
        console.log("It is a Second Sanity Testcase");
    })
})

test.describe("Regression Tests",async()=>{
    test("First Regression Test", async({page})=>{
        console.log("It is a First Regression Testcase");
    })

    test("Second Regression Test", async({page})=>{
        console.log("It is a Second Regression Testcase");
    })
})

test.describe("Unit Tests",async()=>{
    test("First Unit Test", async({page})=>{
        console.log("It is a First Unit Testcase");
    })

    test("Second Unit Test", async({page})=>{
        console.log("It is a Second Unit Testcase");
    })
})