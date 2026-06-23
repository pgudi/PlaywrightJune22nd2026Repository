const {test, expect} = require("@playwright/test")

test("First Assertion on Testcase", ()=>{
    expect(100).toBe(100)
})

test("Second Assertion on Testcase", ()=>{
    expect(12.75).toBe(12.75)
})

test.skip("Third Assertion on Testcase", ()=>{
    expect(45).toBeGreaterThan(25)
})

test("Fourth Assertion on Testcase", ()=>{
    expect(15).toBeLessThanOrEqual(35)
})

test("Fifth Assertion on Testcase", ()=>{
    expect('S G Software Testing Institute').toContain("Testing")
})

test("Sixth Assertion on Testcase", ()=>{
    expect('S G Software Testing Institute'.includes("Software")).toBeTruthy()
})

test("Seventh Assertion on Testcase", ()=>{
    expect("S G Test"=="S G Test").toBeTruthy()
})