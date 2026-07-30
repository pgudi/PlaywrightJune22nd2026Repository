import {test, expect} from '@playwright/test'

test("Read Content from Web Table", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const tableBook=await page.$("//table[@name='BookTable']")
    const tableRows=await tableBook.$$("tr")
    console.log("Number of Rows in a Table :"+tableRows.length);
    let content=""
    for(let i=0;i<tableRows.length;i++){
        const tableCells=await tableRows[i].$$("td")
        for(let j=0;j<tableCells.length;j++){
            const textContext=await tableCells[j].textContent()
            content=content+textContext+"  "
            
        }
        content=content+"\n"
    }
    console.log(content);
    

})

test.only("Read Content from Web Table based Column Name", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const tableBook=await page.$("//table[@name='BookTable']")
    const tableRows=await tableBook.$$("tr")
    console.log("Number of Rows in a Table :"+tableRows.length);
    const columns=await tableRows[0].$$("th")
    for(let i=0;i<columns.length;i++){
        const columnname=await columns[i].textContent()
        
        if(columnname=="Author"){
            for(let k=1;k<tableRows.length;k++){
                const cellName=await tableRows[k].$$("td")
                console.log("Cell Data :"+await cellName[1].textContent());
                
            }
        }
    }
    

})

