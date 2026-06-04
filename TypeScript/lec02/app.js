"use strict";
let stdName = "Laiba";
console.log(stdName);
let student = [
    101,
    "Anusha",
    true,
];
console.log(student[2]);
let students = ["Laiba", "Anusha", "Anum", "Abdul Rehman", "Abu Hurerah"];
for (let i = 0; i <= students.length; i++) {
    console.log(students[i]);
}
for (let i = 0; i < student.length; i++) {
    console.log(student[i]);
}
let employees = [
    [201, "Laiba", true],
    [202, "Anusha", false],
    [203, "Anum", true],
];
console.log(employees[1][1]);
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i][1]);
}
function greet() {
    console.log("Welcome to our application");
}
greet();
function add(a, b) {
    return a + b;
}
let res = add(4, 5);
console.log(res);
function multiply(c, d) {
    return c * d;
}
let result = multiply(3, 8);
console.log(result);
