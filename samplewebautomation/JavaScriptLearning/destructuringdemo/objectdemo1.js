
let student={
    "rollno":101,
    "sname":"Santosh",
    "age":21,
    "course":"Science"
}

// let {rollno,sname,age} = student
// console.log(rollno,sname,age);

//skip
let {rollno,sname,...test} = student
console.log(rollno,sname);
console.log(test);


