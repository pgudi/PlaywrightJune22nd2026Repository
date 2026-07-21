const {test, expect} = require("@playwright/test")

test.beforeAll(async()=>{
    console.log("Login into the Application ");
})

test.afterAll(async()=>{
    console.log("Logout from the Application ");
})

test("First Testcase", async ({page})=>{
    console.log("It is a First Testcase");
})

test("Second Testcase", async ({page})=>{
    console.log("It is a Second Testcase");
})


test("Third Testcase", async ({page})=>{
    console.log("It is a Third Testcase");
})

test("Fourth Testcase", async ({page})=>{
    console.log("It is a Fourth Testcase");
})