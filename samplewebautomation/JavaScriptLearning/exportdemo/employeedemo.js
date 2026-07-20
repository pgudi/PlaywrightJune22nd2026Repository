class Employee{
    constructor(empid,ename,job,sal){
        this.empid=empid
        this.ename=ename
        this.job=job
        this.sal=sal
    }

    showEmployeeId(){
        console.log("Employee Id :"+this.empid);
    }

     showEmployeeName(){
        console.log("Employee Name :"+this.ename);
    }

     showEmployeeJob(){
        console.log("Employee JobName :"+this.job);
    }

     showEmployeeSalary(){
        console.log("Employee Salary :"+this.sal);
    }
}

module.exports= {Employee}



