class Department1{
    deptno!:number;
    dname!:String;
    location!:string;
}

let obj1:Department1=new Department1()
obj1.deptno=10
obj1.dname="Accounting"
obj1.location="Dallas"

console.log(obj1.deptno)
console.log(obj1.dname)
console.log(obj1.location)

let obj2:Department1=new Department1()
obj2.deptno=20
obj2.dname="Research"
obj2.location="New York"

console.log(obj2.deptno)
console.log(obj2.dname)
console.log(obj2.location)