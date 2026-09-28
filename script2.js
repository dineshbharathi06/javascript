
let name = "Dinesh";

console.log(typeof name);


let age = 25;

console.log(age);
console.log(typeof age);

let isStudent = true;

console.log(isStudent);
console.log(typeof isStudent);


let value;

console.log(value);
console.log(typeof value);




let data = null;

console.log(data);
console.log(typeof data);



let myName = "Dinesh";
let myAge = 25;
let isWorking = true;
let address;
let phone = null;

console.log(myName);
console.log(myAge);
console.log(isWorking);
console.log(address);
console.log(phone);


let qualification = "BCA";

console.log(typeof qualification);




let salary = 30000;

console.log(typeof salary === "number");
true



let a = "100";
let b = 100;

console.log(typeof a);
console.log(typeof b);




let name = "Dinesh";
let age = 25;
let qualification = "BCA";
let working = true;

console.log(name, typeof name);
console.log(age, typeof age);
console.log(qualification, typeof qualification);
console.log(working, typeof working);




let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];

console.log(fruits);


let numbers = [10, 20, 30, 40, 50];

console.log(numbers[0]);


let colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];

console.log(colors[2]);



let mobiles = ["Samsung", "Apple", "OnePlus", "Vivo", "Oppo"];

console.log(mobiles[mobiles.length - 1]);


let numbers = [10, 20, 30, 40, 50, 60, 70];

console.log(numbers[numbers.length - 2]);


let foods = ["Biriyani", "Pizza", "Burger", "Fried Rice", "Dosa"];

console.log(foods[0]);
console.log(foods[2]);
console.log(foods[foods.length - 1]);



let cricketers = [
    "Virat Kohli",
    "Rohit Sharma",
    "MS Dhoni",
    "Jasprit Bumrah",
    "Ravindra Jadeja"
];

console.log(cricketers[3]);



let toys = ["Car", "Ball", "Robot", "Teddy Bear", "Doll"];

console.log(toys[toys.length - 1]);




let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(values[0]);
console.log(values[values.length - 1]);
console.log(values[values.length - 2]);



let items = ["Apple", "Mango", "Car", "Robot", "Virat Kohli"];

console.log(items);

console.log(items[0]);
console.log(items[2]);
console.log(items[4]);


let person = {
    name: "Dinesh",
    age: 25,
    city: "Chennai"
};

console.log(person);



let employee = {
    name: "Dinesh",
    qualification: "BCA",
    company: "TCS"
};

console.log(employee.company);



let fruitObject = {
    fruits: ["Apple", "Mango", "Orange", "Banana"]
};

console.log(fruitObject.fruits[1]);



let toyObject = {
    toys: ["Car", "Robot", "Ball", "Doll"]
};

console.log(toyObject.toys[toyObject.toys.length - 1]);


let player = {
    cricketer: "Virat Kohli",
    team: "India"
};

console.log(player.cricketer);


let details = {
    fruitName: "Apple",
    toyName: "Robot",
    cricketer: "MS Dhoni"
};

console.log(details.fruitName);
console.log(details.toyName);
console.log(details.cricketer);


let college = {
    students: ["Dinesh", "Arun", "Kumar"],
    courses: ["JavaScript", "HTML", "CSS"]
};

console.log(college.students[0]);
console.log(college.courses[1]);


let mobileDetails = {
    mobile: ["Samsung", "Apple", "OnePlus", "Vivo"]
};

console.log(mobileDetails.mobile[2]);



let employeeDetails = {
    employeeName: "Dinesh",
    skills: ["HTML", "CSS", "JavaScript"],
    experience: 2
};

console.log(employeeDetails.skills[1]);


let personalInfo = {
    name: "Dinesh",
    age: 25,
    city: "Chennai",
    qualification: "BCA",
    job: "Developer"
};

console.log(personalInfo.name);
console.log(personalInfo.age);
console.log(personalInfo.qualification);


let a = 20;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);




let a = 25;
let b = 4;

console.log(a % b);


console.log(2 ** 5);




let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);



let number = 10;

number = number + 5;

console.log(number);


let a = 10;

console.log(++a);


let a = 10;

console.log(a++);
console.log(a);


let a = 20;

console.log(--a);



let a = 20;

console.log(a--);
console.log(a);


let a = 10;
let b = 10;

console.log(++a); // Pre-increment
console.log(b++); // Post-increment

console.log(a);
console.log(b);


let a = 20;
let b = 10;

a += b;

console.log(a);


let a = 50;
let b = 20;

a -= b;

console.log(a);


let a = 10;
let b = 5;

a *= b;

console.log(a);


let a = 100;
let b = 10;

a /= b;

console.log(a);


let a = 25;
let b = 4;

a %= b;

console.log(a);



let a = 20;
let b = 10;

console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);


let number = 100;
let string = "100";

console.log(number == string);
console.log(number === string);


let a = 20;
let b = 10;

console.log(a > 15 && b < 20);
console.log(a > 15 || b > 20);
console.log(!(a > 15));


let age = 20;

let result = age >= 18 ? "Eligible" : "Not Eligible";

console.log(result);

let marks = 75;

let result = marks >= 35 ? "Pass" : "Fail";

console.log(result);
