<<<<<<< HEAD
// alert("Welcome to my JavaScript Task!");
// let name = "Barsharani Sahu";
// console.log("Name:", name);
// document.write("Name: " + name + "<br>");

// let age = 20;
// console.log("Age:", age);
// document.write("Age: " + age + "<br>");

// const college = "Regional College of Management, Bhubaneswar";
// console.log("College:", college);
// document.write("College: " + college + "<br>");

// const course = "BCA";
// console.log("Course:", course);
// document.write("Course: " + course + "<br>");

// let city = "Bhubaneswar";
// console.log("City:", city);
// document.write("City: " + city + "<br>");

// let isStudent = true;
// console.log("Is Student:", isStudent);
// document.write("Is Student: " + isStudent + "<br>");

// // Variables for different data types
// let stringData = "JavaScript";
// console.log(typeof stringData);
// let numberData = 100;
// console.log(typeof numberData);
// let booleanData = true;
// console.log(typeof booleanData);
// let nullData = null;
// console.log(typeof nullData);
// let undefinedData;
// console.log(typeof undefinedData);
=======
/*
>>>>>>> 33699d0 (Completed JavaScript Task 3 - Student Eligibility and Grade Checker)
// Student Detail
console.log("===== STUDENT RESULT SUMMARY =====");
let studentName = "Barsharani Sahu";
console.log("Student Name: " + studentName);
const rollNumber = "24BCA013";
console.log("Roll Number: " + rollNumber);
let age = 20;
console.log("Age: " + age);
const collegeName = "Regional College of Management, Bhubaneswar";
console.log("College: " + collegeName);
const course = "BCA";
console.log("Course: " + course);
let city = "Bhubaneswar";
console.log("City: " + city);
let isStudent = true;

// Subject Marks

let htmlMarks = 90;
console.log("HTML Marks: " + htmlMarks);
let cssMarks = 85;
console.log("CSS Marks: " + cssMarks);
let javascriptMarks = 95;
console.log("JavaScript Marks: " + javascriptMarks);
let databaseMarks = 88;
console.log("Database Marks: " + databaseMarks);
let gitMarks = 92;
console.log("Git Marks: " + gitMarks);

// Calculations

let totalMarks = htmlMarks + cssMarks + javascriptMarks + databaseMarks + gitMarks;

const maximumMarks = 500;

let averageMarks = totalMarks / 5;

console.log("Total Marks: " + totalMarks);
console.log("Maximum Marks: " + maximumMarks);
console.log("Average Marks: " + averageMarks);

// Data Types

let myString = "Biology";
let myNumber = 100;
let myBoolean = true;
let myNull = null;
let myUndefined;

console.log("String: " + myString);
console.log("Number: " + myNumber);
console.log("Boolean: " + myBoolean);
console.log("Null: " + myNull);
console.log("Undefined: " + myUndefined);

console.log("Type of String: " + typeof myString);
console.log("Type of Number: " + typeof myNumber);
console.log("Type of Boolean: " + typeof myBoolean);
console.log("Type of Null: " + typeof myNull);
console.log("Type of Undefined: " + typeof myUndefined);

// Arithmetic Operators

let a = 20;
let b = 2;

console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b));

a++;
console.log("Increment: " + a);

b--;
console.log("Decrement: " + b);

let x = 10;

x += 5;
console.log("After += : " + x);

x -= 2;
console.log("After -= : " + x);

x *= 3;
console.log("After *= : " + x);

x /= 2;
console.log("After /= : " + x);

// Comparison Operators

console.log("HTML > CSS : " + (htmlMarks > cssMarks));
console.log("HTML < CSS : " + (htmlMarks < cssMarks));
console.log("HTML >= CSS : " + (htmlMarks >= cssMarks));
console.log("HTML <= CSS : " + (htmlMarks <= cssMarks));
console.log("HTML == CSS : " + (htmlMarks == cssMarks));
console.log("HTML === CSS : " + (htmlMarks === cssMarks));
console.log("HTML != CSS : " + (htmlMarks != cssMarks));

// == and ===

let numberValue = 100;
let stringValue = "100";

console.log("Using == : " + (numberValue == stringValue));
<<<<<<< HEAD
console.log("Using === : " + (numberValue === stringValue));
=======
console.log("Using === : " + (numberValue === stringValue));*/

// Student 

const studentName = "Barsharani Sahu";
console.log("Student Name: " + studentName);
let age = 19;
console.log("Age: " + age);

let javascriptMarks = 85;
console.log("JavaScript Marks: " + javascriptMarks);
let htmlMarks = 78;
console.log("HTML Marks: " + htmlMarks);

let cssMarks = 82;
console.log("CSS Marks: " + cssMarks);

let attendancePercentage = 90;
console.log("Attendance: " + attendancePercentage + "%");
const isStudent = true;
console.log("Is Student: " + isStudent);

// 2. Voting Eligibility
if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}


// 3. Even or Odd 
let number = 15;

if (number % 2 == 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}

// 4. Student Grade 
let averageMarks = (javascriptMarks + htmlMarks + cssMarks) / 3;

console.log("Average Marks: " + averageMarks);

if (averageMarks >= 80) {
    console.log("Grade A");
} else if (averageMarks >= 60) {
    console.log("Grade B");
} else if (averageMarks >= 40) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// 5. Internship Eligibility Checker
if (age >= 18 && attendancePercentage >= 75 && isStudent === true) {
    console.log("Eligible for Internship");
} else {
    console.log("Not Eligible for Internship");
}

console.log("--------------------------------");

// 6. Logical Operator Practice

// AND (&&)
console.log("AND Operator:");
console.log(age >= 18 && attendancePercentage >= 75);

// OR (||)
console.log("OR Operator:");
console.log(age >= 18 || attendancePercentage >= 95);

// NOT (!)
console.log("NOT Operator:");
console.log(!isStudent);

console.log("--------------------------------");

// 7. Comparison Operators

console.log("Comparison Operators");

console.log("Age > 18 : " + (age > 18));
console.log("Age < 18 : " + (age < 18));
console.log("Age >= 18 : " + (age >= 18));
console.log("Age <= 18 : " + (age <= 18));

console.log("10 == '10' : " + (10 == "10"));
console.log("10 === '10' : " + (10 === "10"));
console.log("10 != 20 : " + (10 != 20));
>>>>>>> 33699d0 (Completed JavaScript Task 3 - Student Eligibility and Grade Checker)
