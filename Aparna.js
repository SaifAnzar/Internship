
// Student Details

let studentName = "Aparna Das";
let rollNumber = 10;
let age = 19;
const collegeName = "Regional College Of Management";
const course = "BCA";
let city = "Bhubaneswar";
let isStudent = true;

// Subject Marks

let htmlMarks = 90;
let cssMarks = 88;
let javascriptMarks = 85;
let databaseMarks = 92;
let gitMarks = 95;

// Calculations

let totalMarks = htmlMarks + cssMarks + javascriptMarks + databaseMarks + gitMarks;
const maximumMarks = 500;
let averageMarks = totalMarks / 5;

// Student Result Summary

console.log("========== STUDENT RESULT SUMMARY ==========");

console.log("Student Name : " + studentName);
console.log("Roll Number  : " + rollNumber);
console.log("Age          : " + age);
console.log("College      : " + collegeName);
console.log("Course       : " + course);
console.log("City         : " + city);
console.log("Is Student   : " + isStudent);

console.log("--------------------------------------------");

console.log("HTML Marks       : " + htmlMarks);
console.log("CSS Marks        : " + cssMarks);
console.log("JavaScript Marks : " + javascriptMarks);
console.log("Database Marks   : " + databaseMarks);
console.log("Git Marks        : " + gitMarks);

console.log("--------------------------------------------");

console.log("Total Marks      : " + totalMarks);
console.log("Maximum Marks    : " + maximumMarks);
console.log("Average Marks    : " + averageMarks);

console.log("============================================");

// Data Type Practice

let stringExample = "Hello JavaScript";
let numberExample = 100;
let booleanExample = true;
let nullExample = null;
let undefinedExample;

console.log("String Example    : " + stringExample);
console.log("Number Example    : " + numberExample);
console.log("Boolean Example   : " + booleanExample);
console.log("Null Example      : " + nullExample);
console.log("Undefined Example : " + undefinedExample);

// typeof Practice

console.log("Type of studentName     : " + typeof studentName);
console.log("Type of rollNumber      : " + typeof rollNumber);
console.log("Type of age             : " + typeof age);
console.log("Type of collegeName     : " + typeof collegeName);
console.log("Type of course          : " + typeof course);
console.log("Type of city            : " + typeof city);
console.log("Type of isStudent       : " + typeof isStudent);
console.log("Type of stringExample   : " + typeof stringExample);
console.log("Type of numberExample   : " + typeof numberExample);
console.log("Type of booleanExample  : " + typeof booleanExample);
console.log("Type of nullExample     : " + typeof nullExample);
console.log("Type of undefinedExample: " + typeof undefinedExample);

// Arithmetic Operators

let a = 20;
let b = 10;

console.log("Addition       : " + (a + b));
console.log("Subtraction    : " + (a - b));
console.log("Multiplication : " + (a * b));
console.log("Division       : " + (a / b));
console.log("Modulus        : " + (a % b));

// Increment
let increment = 5;
increment++;
console.log("Increment : " + increment);

// Decrement
let decrement = 10;
decrement--;
console.log("Decrement : " + decrement);

// += Operator
let addAssign = 20;
addAssign += 5;
console.log("After += : " + addAssign);

// -= Operator
let subAssign = 20;
subAssign -= 5;
console.log("After -= : " + subAssign);

// *= Operator
let mulAssign = 20;
mulAssign *= 5;
console.log("After *= : " + mulAssign);

// /= Operator
let divAssign = 20;
divAssign /= 5;
console.log("After /= : " + divAssign);

// Comparison Operators

console.log("HTML > CSS  : " + (htmlMarks > cssMarks));
console.log("HTML < CSS  : " + (htmlMarks < cssMarks));
console.log("HTML >= CSS : " + (htmlMarks >= cssMarks));
console.log("HTML <= CSS : " + (htmlMarks <= cssMarks));
console.log("HTML == CSS : " + (htmlMarks == cssMarks));
console.log("HTML === CSS: " + (htmlMarks === cssMarks));
console.log("HTML != CSS : " + (htmlMarks != cssMarks));

// Tricky Part (== and ===)

let numberValue = 100;
let stringValue = "100";

console.log("Number Value : " + numberValue);
console.log("String Value : " + stringValue);

console.log("Using ==  : " + (numberValue == stringValue));
console.log("Using === : " + (numberValue === stringValue));





// Student 

const studentName = "Aparna Das";
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

console.log("--------");

// 6. Logical Operator

// AND (&&)
console.log("AND Operator:");
console.log(age >= 18 && attendancePercentage >= 75);

// OR (||)
console.log("OR Operator:");
console.log(age >= 18 || attendancePercentage >= 95);

// NOT (!)
console.log("NOT Operator:");
console.log(!isStudent);

console.log("--------");

// 7. Comparison Operators

console.log("Comparison Operators");

console.log("Age > 18 : " + (age > 18));
console.log("Age < 18 : " + (age < 18));
console.log("Age >= 18 : " + (age >= 18));
console.log("Age <= 18 : " + (age <= 18));

console.log("10 == '10' : " + (10 == "10"));
console.log("10 === '10' : " + (10 === "10"));
console.log("10 != 20 : " + (10 != 20));




// JavaScript For Loop Practice

// 1. Number Printing
console.log("1. Number Printing");

for (let number = 1; number <= 10; number++) {
    console.log(number);
}
=
// 2. Reverse Number Printing

console.log("\n2. Reverse Number Printing");

for (let number = 10; number >= 1; number--) {
    console.log(number);
}

// 3. Even Number Checker

console.log("\n3. Even Numbers from 1 to 20");

for (let number = 1; number <= 20; number++) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

// 4. Odd Number Checker

console.log("\n4. Odd Numbers from 1 to 20");

for (let number = 1; number <= 20; number++) {
    if (number % 2 !== 0) {
        console.log(number);
    }
}

// 5. Multiplication Table

console.log("\n5. Multiplication Table");

const tableNumber = 5;

for (let multiplier = 1; multiplier <= 10; multiplier++) {
    console.log(tableNumber + " x " + multiplier + " = " + (tableNumber * multiplier));
}

// 6. Sum of Numbers

console.log("\n6. Sum of Numbers from 1 to 10");

let sum = 0;

for (let number = 1; number <= 10; number++) {
    sum = sum + number;
}

console.log("Sum =", sum);

// 7. Numbers Divisible by 3

console.log("\n7. Numbers Divisible by 3 (1 to 30)");

for (let number = 1; number <= 30; number++) {
    if (number % 3 === 0) {
        console.log(number);
    }
}

// 8. Loop Increment Practice

console.log("\n8. Loop Increment Practice");

for (let number = 2; number <= 20; number += 2) {
    console.log(number);
}

// 9. Loop Decrement Practice

console.log("\n9. Loop Decrement Practice");

for (let number = 20; number >= 0; number -= 2) {
    console.log(number);
}

// 10. Conditions with Loop

console.log("\n10. Conditions with Loop");

for (let number = 1; number <= 15; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("Divisible by 3 and 5");
    } else {
        console.log(number);
    }
}