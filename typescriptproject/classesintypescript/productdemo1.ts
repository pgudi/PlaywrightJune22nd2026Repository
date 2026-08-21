class Product{
    prodid:number;
    prodname!:string;
    price:number;
    constructor(){
        this.prodid=1001
        this.prodname="Lenovo Desktop"
        this.price=24000
    }
    displayProduct():void{
        console.log("Product Id :"+this.prodid)
        console.log("Product Name :"+this.prodname)
        console.log("Product Price :"+this.price)
    }
}

let obj:Product=new Product()
obj.displayProduct()