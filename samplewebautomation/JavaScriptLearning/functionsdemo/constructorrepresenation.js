//Named function

function display(dname, location){
    this.dname=dname
    this.location=location
    console.log("Department Name :"+this.dname);
    console.log("Department Location :"+this.location);
}

let obj=new display("Accounting","California")

// Ananymous Function

let result=function(dname, location){
    this.dname=dname
    this.location=location
    console.log("Department Name :"+this.dname);
    console.log("Department Location :"+this.location);
}

let obj=new result("Accounting","California")

// Arrow Function
let result=(dname, location)=>{
    this.dname=dname
    this.location=location
    console.log("Department Name :"+this.dname);
    console.log("Department Location :"+this.location);
}

let obj=new result("Accounting","California") 
