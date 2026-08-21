class Department2{
    deptno:number=20;
    dname:String="Research";
    location:string="Boston";

    displayDeptDetails(){
        console.log(this.deptno)
        console.log(this.dname)
        console.log(this.location)
    }
}

let obj3:Department2=new Department2()
obj3.displayDeptDetails()