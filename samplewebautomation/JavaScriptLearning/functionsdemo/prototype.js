// Prototype
function showStudent(){
    this.rollno=101
    this.sname="Santosh"
    this.age=21
}

showStudent.prototype.course="Physics"
showStudent.prototype.location=function(){
                                    console.log("Locaton is California");
                                    
                                }

let o1=new showStudent()
console.log(o1.rollno);
console.log(o1.sname);
console.log(o1.age);
console.log(o1.course);
o1.location()

let o2=new showStudent()
console.log(o2.rollno);
console.log(o2.sname);
console.log(o2.age);
console.log(o2.course);
o2.location()