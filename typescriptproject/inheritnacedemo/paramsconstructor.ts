export{}
class Customer{
    constructor(custid:number,custname:string,custemail:string){
        console.log("Customer Id :"+custid)
        console.log("Customer Name :"+custname)
        console.log("Customer EMail :"+custemail)
    }
}

class Product extends Customer{
    constructor(pid:number,prodname:string,quantity:number, cid:number,cname:string,email:string){
        super(cid,cname,email)
        console.log("Product Id :"+pid)
        console.log("Product Name :"+prodname)
        console.log("Product Qunatiy :"+quantity)
    }
}

let obj:Product=new Product(101,"Dell Desktop",25,10,"SG Soft", "testing@sg.com")

