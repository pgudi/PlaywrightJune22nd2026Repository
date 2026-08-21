// Named function without parameters:
function showPersonName():void{
    console.log("Santosh")
}

showPersonName()
console.log("-------------------------");
// NAmed function with parameters
function departmentDetails(dname:string,loc:string):void{
    console.log(`Deaprtment Name ${dname}`)
    console.log(`Deaprtment Location ${loc}`)
}

departmentDetails("Research","Dallas")
console.log("-------------------------");
// Named function with Rest parameters
function addition(...numbers:number[]):void{
    let result:number=0
    for(let i=0;i<numbers.length;i++){
        result=result+numbers[i]
    }
    console.log(result)
}
addition(30,50) // 80
addition(20,40,30) // 90
addition(10,20,30,40,50)  // 150
console.log("-------------------------");
// Named function with optional parameters
function showCustoemrDetails(custId:number,custName:string,email?:string):void{
    console.log("Customer Id :"+custId)
    console.log("Customer Id :"+custName)
    if(email!==undefined){
        console.log("Customer Email Id :"+email)
    }
}

showCustoemrDetails(101,"Santosh","santu@sg.com")
showCustoemrDetails(101,"Adams")
console.log("-------------------------");
// Named function with default parameters
function doPurchase(prodid:number,prodname:string,qusntity:number=10):void{
    console.log("Product Id :"+prodid)
    console.log("Product Name :"+prodname)
    console.log("Product Quantity :"+qusntity)
}

doPurchase(101,"Lenovo Laptop",5)
doPurchase(102,"HP Laptop")