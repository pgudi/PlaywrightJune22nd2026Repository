class Department{
    
    constructor(){
        this.deptno=20
        this.dname="Sales"
        this.location="Bangalore"
    }

    show(){
        console.log(this.deptno,this.dname, this.location);
    }
}

let o1=new Department()
o1.show()

let o2=new Department()
o2.show()