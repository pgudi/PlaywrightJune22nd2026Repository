class Department{
    deptno;
    dname;
    location;

    setDeptDetails(dno, deptname,location){
        this.deptno=dno
        this.dname=deptname
        this.location=location
    }

    display(){
        console.log(this.deptno, this.dname, this.location);
        
    }
}

let o1=new Department()
o1.setDeptDetails(10,"Accounting","Dallas")
o1.display()

let o2=new Department()
o2.setDeptDetails(20,"Sales","New York")
o2.display()