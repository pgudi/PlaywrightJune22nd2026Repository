type student={
    rollno:number,
    firstname:string,
    coursename:string,
    marks:number,
    percentage:()=>number
}

let santosh:student={
    "rollno":101,
    "firstname":"Santosh",
    "coursename":"Physics",
    "marks":80,
    "percentage":function(){
                return (this.marks/600)*100
            }
}

let srinivasa:student={
    "rollno":102,
    "firstname":"Srinivasa",
    "coursename":"Mathematics",
    "marks":90,
    "percentage":function(){
                return (this.marks/600)*100
            }
}

console.log(santosh.firstname)
console.log(santosh.percentage())

console.log(srinivasa.firstname)
console.log(srinivasa.percentage())