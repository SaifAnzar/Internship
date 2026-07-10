// ======================================
// Task - 1
// ======================================

// Student Information

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

let checkNumber = 15;

if (checkNumber % 2 === 0) {
    console.log(checkNumber + " is Even");
} else {
    console.log(checkNumber + " is Odd");
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


// 6. Logical Operators

console.log("AND Operator:");
console.log(age >= 18 && attendancePercentage >= 75);

console.log("OR Operator:");
console.log(age >= 18 || attendancePercentage >= 95);

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


// ======================================
// Task - 2
// ======================================

console.log("======== Task - 2 ========");


// 1. Print Numbers from 1 to 10

console.log("1. Numbers from 1 to 10");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. Print Numbers from 10 to 1

console.log("2. Numbers from 10 to 1");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// 3. Print Even Numbers from 1 to 20

console.log("3. Even Numbers");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 4. Print Odd Numbers from 1 to 20

console.log("4. Odd Numbers");

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// 5. Multiplication Table

console.log("5. Multiplication Table");

let tableNumber = 5;

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}


// 6. Sum of Numbers from 1 to 10

console.log("6. Sum of Numbers");

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log("Sum = " + sum);


// 7. Numbers Divisible by 3

console.log("7. Divisible by 3");

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


// 8. Increment by 2

console.log("8. Increment by 2");

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// 9. Decrement by 2

console.log("9. Decrement by 2");

for (let i = 20; i >= 0; i -= 2) {
    console.log(i);
}


// 10. Divisible by 3 and 5

console.log("10. Divisible by 3 and 5");

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Divisible by 3 and 5");
    } else {
        console.log(i);
    }
}