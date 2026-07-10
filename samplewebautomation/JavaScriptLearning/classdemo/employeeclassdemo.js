class Employee{
    constructor(eid, ename,jobname,sal){
        this.eid=eid
        this.ename=ename
        this.job=jobname
        this.sal=sal
    }

    display(){
        console.log(this.eid, this.ename, this.job, this.sal);
    }
}

let o1=new Employee(1001, "Santosh","Manager",45000)
o1.display()

let o2=new Employee(1002,"Adams","Analyst",24000)
o2.display()