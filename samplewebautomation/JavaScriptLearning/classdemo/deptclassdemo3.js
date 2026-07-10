class Department{
    deptno;
    dname;
    location;

    setDeptDetails(){
        this.deptno=10
        this.dname="Operations"
        this.location="California"
    }

    display(){
        console.log(this.deptno, this.dname, this.location);
        
    }
}

let o=new Department()
o.setDeptDetails()
o.display()

let o2=new Department()
o2.setDeptDetails()
o2.display()