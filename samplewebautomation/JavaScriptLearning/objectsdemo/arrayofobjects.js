let students=[
    {
        "rollno":101,
        "fname":"Santosh",
        "age":22,
        "course":"Physics"
    },
    {
        "rollno":102,
        "fname":"Adams",
        "age":24,
        "course":"Chemistry"
    },
    {
        "rollno":103,
        "fname":"Jones",
        "age":23,
        "course":"Maths"
    }
]

//Read Property values
console.log(students[0].rollno);
console.log(students[0].fname);
console.log(students[0].age);
console.log(students[0].course);
console.log(students[1].rollno);
console.log(students[1].fname);
console.log(students[1].age);
console.log(students[1].course);
console.log(students[2]["rollno"]);
console.log(students[2]["fname"]);
console.log(students[2]["age"]);
console.log(students[2]["course"]);
