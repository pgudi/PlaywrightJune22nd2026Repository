class Employee{
    constructor(eid,ename,jobname){
        this.eid=eid
        this.ename=ename
        this.jobname=jobname
    }

    showEmployeeInformation(){
        console.log(this.eid, this.ename, this.jobname);
    }
}

class Department extends Employee{
    constructor(deptno,dname,loc, empid,empname,job){
        super(empid,empname,job)
        this.deptno=deptno
        this.dname=dname
        this.loc=loc
    }

    displayDeptDetails(){
        console.log(this.deptno, this.deptno, this.loc);
    }
}

let obj=new Department(20,"Sales","New York", 1001,"Santosh","Sales VP")
obj.showEmployeeInformation()
obj.displayDeptDetails()