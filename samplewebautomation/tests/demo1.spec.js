const {test, expect} = require('@playwright/test')

test("First Playwright Testcase", function display(){
    console.log("It is a First Playwright Testcase!!!");
    
})

test("Second PLaywright Testcase", function(){
    console.log("It is a Second Playwright Testcase!!!");
})

test("Third Playwright Testcase", ()=>{
    console.log("It is a Third Playwright Testcase!!!");
})