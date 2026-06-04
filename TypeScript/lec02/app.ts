let stdName:string = "Laiba";
console.log(stdName);

let student:[number, string, boolean] = [
    101, 
    "Anusha", 
    true, 
]

console.log(student[2]); 

let students:string[] = ["Laiba", "Anusha", "Anum", "Abdul Rehman", "Abu Hurerah"]; 
for (let i:number = 0; i <= students.length; i++) {
    console.log(students[i]);
}

for (let i:number = 0; i < student.length; i++) {
    console.log(student[i]);
}

let employees:[number,string,boolean][] = [
    [201, "Laiba", true],
    [202, "Anusha", false],
    [203, "Anum", true],
]

console.log(employees[1][1]);

for (let i:number = 0; i < employees.length; i++) {
    console.log(employees[i][1]);
}

function greet() {
    console.log("Welcome to our application");
}

greet();

function add(a:number, b:number):number {
    return a + b;
}

let res:number = add(4, 5);

console.log(res);


function multiply(c:number, d:number) {
    return c * d;
}

let result:number = multiply(3, 8); 

console.log(result);