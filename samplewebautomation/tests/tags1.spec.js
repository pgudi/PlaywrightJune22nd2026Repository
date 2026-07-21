const {test, expect} = require("@playwright/test")

test("First Testcase @sanity", async({page})=>{
    console.log("It is a First Sanity Test case")
})

test("Second Testcase @sanity", async({page})=>{
    console.log("It is a Second Sanity Test case")
})

test("Third Testcase @regression", async({page})=>{
    console.log("It is a Third Regression Test case")
})

test("Fourth Testcase @regression", async({page})=>{
    console.log("It is a Fourth Regression Test case")
})


// test("Fifth Testcase @sanity@regression", async({page})=>{
//     console.log("It is a Fifth Sanity & Regression Test case")
// })

// test("Sixth Testcase @sanity@regression", async({page})=>{
//     console.log("It is a Sixth Sanity & Regression Test case")
// })

test("Fifth Testcase @regression@sanity", async({page})=>{
    console.log("It is a Fifth Sanity & Regression Test case")
})

test("Sixth Testcase @regression@sanity", async({page})=>{
    console.log("It is a Sixth Sanity & Regression Test case")
})