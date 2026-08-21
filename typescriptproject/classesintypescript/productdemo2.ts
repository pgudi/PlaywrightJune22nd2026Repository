class Product1{
    prodid:number;
    prodname!:string;
    price:number;
    constructor(prodid:number,prodname:string,price:number){
        this.prodid=prodid
        this.prodname=prodname
        this.price=price

        console.log("Product Id :"+this.prodid)
        console.log("Product Name :"+this.prodname)
        console.log("Product Price :"+this.price)
    }
}

let o1:Product1=new Product1(10001,"HP PenDrive",4500.00)
let o2:Product1=new Product1(10002,"LP Air Cooler",500.00)
let o3:Product1=new Product1(10003,"Dell Laptop",44700.00)