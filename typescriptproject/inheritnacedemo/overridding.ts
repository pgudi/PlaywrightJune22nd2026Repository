export{}
class Employee{
    displayDepartmentName(dname:string){
        console.log("Department Name for Employee Class is :"+dname)
    }
}

class Insurance extends Employee{
    constructor(dname:string){
        super()
        super.displayDepartmentName(dname)
    }
    displayDepartmentName(dname:string){
        console.log("Department Name for Insurance Class is :"+dname)
    }
}

let obj:Insurance=new Insurance("Research")
obj.displayDepartmentName("Accounting")
