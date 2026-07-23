const {test, expect} = require("@playwright/test")

import data1 from './../datafiles/testdata1.json'
import data2 from './../datafiles/testdata2.json'

const data3 = require('./../datafiles/testdata3.json')

test("Read Content From JSON File", async({page})=>{
    console.log(data1.username);
    console.log(data1.password);
})

test("Read Content from JSON Array", async({page})=>{
    for (let data of data2){
        console.log(data.username);
        console.log(data.password);
    }
})

test.only("Read Nested JOSN Data", async({page})=>{
    console.log(data3);
    
    console.log(data3.login.username);
    console.log(data3.login.password);
    console.log(data3.customer.customername);
    console.log(data3.customer.email);
    console.log(data3.customer.location);
})