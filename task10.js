// ===============================
// JavaScript Task 10 Functions
// ===============================

// ---------------------------------
// 1. Simple Function
// ---------------------------------
function welcomeMessage() {
    console.log("Welcome to ODIZO Internship");
}

welcomeMessage();
welcomeMessage();


// ---------------------------------
// 2. Student Information
// ---------------------------------
function studentInfo() {
    console.log("Student Name: Diksha Gupta");
    console.log("College Name: Regional College of Management");
    console.log("Course: BCA");
    console.log("Semester: 2nd Semester");
}

studentInfo();


// ---------------------------------
// 3. Addition Function
// ---------------------------------
function addNumbers(a, b) {
    console.log("Sum = " + (a + b));
}

addNumbers(10, 20);
addNumbers(50, 30);
addNumbers(100, 25);


// ---------------------------------
// 4. Subtraction Function
// ---------------------------------
function subtractNumbers(a, b) {
    console.log("Subtraction = " + (a - b));
}

subtractNumbers(20, 10);
subtractNumbers(100, 40);


// ---------------------------------
// 5. Multiplication Function
// ---------------------------------
function multiplyNumbers(a, b) {
    console.log("Multiplication = " + (a * b));
}

multiplyNumbers(5, 6);
multiplyNumbers(8, 4);


// ---------------------------------
// 6. Division Function
// ---------------------------------
function divideNumbers(a, b) {
    console.log("Division = " + (a / b));
}

divideNumbers(20, 5);
divideNumbers(100, 4);


// ---------------------------------
// 7. Even or Odd Checker
// ---------------------------------
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is Even Number");
    } else {
        console.log(number + " is Odd Number");
    }
}

checkEvenOdd(10);
checkEvenOdd(15);
checkEvenOdd(20);
checkEvenOdd(7);
checkEvenOdd(30);


// ---------------------------------
// 8. Voting Eligibility Checker
// ---------------------------------
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log(age + " : Eligible to Vote");
    } else {
        console.log(age + " : Not Eligible to Vote");
    }
}

checkVotingEligibility(17);
checkVotingEligibility(18);
checkVotingEligibility(25);


// ---------------------------------
// 9. Grade Checker
// ---------------------------------
function checkGrade(average) {
    if (average >= 90) {
        console.log("Grade A+");
    } else if (average >= 80) {
        console.log("Grade A");
    } else if (average >= 70) {
        console.log("Grade B");
    } else if (average >= 60) {
        console.log("Grade C");
    } else if (average >= 40) {
        console.log("Grade D");
    } else {
        console.log("Fail");
    }
}

checkGrade(95);
checkGrade(85);
checkGrade(72);
checkGrade(65);
checkGrade(45);
checkGrade(30);


// ---------------------------------
// 10. Largest Number
// ---------------------------------
function findLargest(a, b) {
    if (a > b) {
        console.log("Largest Number = " + a);
    } else {
        console.log("Largest Number = " + b);
    }
}

findLargest(20, 50);
findLargest(100, 80);
findLargest(45, 90);


// ---------------------------------
// 11. Return Practice
// ---------------------------------
function squareNumber(number) {
    return number * number;
}

let square = squareNumber(6);
console.log("Square = " + square);


// ---------------------------------
// 12. Rectangle Area
// ---------------------------------
function calculateRectangleArea(length, width) {
    return length * width;
}

let rectangleArea = calculateRectangleArea(10, 5);
console.log("Rectangle Area = " + rectangleArea);


// ---------------------------------
// 13. Circle Area
// ---------------------------------
function calculateCircleArea(radius) {
    return 3.14 * radius * radius;
}

let circleArea = calculateCircleArea(7);
console.log("Circle Area = " + circleArea);


// ---------------------------------
// 14. Multiplication Table
// ---------------------------------
function printTable(number) {
    console.log("Multiplication Table of " + number);

    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

printTable(5);
printTable(8);


// ---------------------------------
// 15. Final Challenge
// ---------------------------------
function studentReport(name, htmlMarks, cssMarks, javascriptMarks, attendance) {

    let total = htmlMarks + cssMarks + javascriptMarks;
    let average = total / 3;

    let grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 40) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    let result;

    if (average >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    let attendanceStatus;

    if (attendance >= 75) {
        attendanceStatus = "Good Attendance";
    } else {
        attendanceStatus = "Low Attendance";
    }

    console.log("==================================");
    console.log("        STUDENT REPORT");
    console.log("==================================");
    console.log("Student Name : " + name);
    console.log("HTML Marks : " + htmlMarks);
    console.log("CSS Marks : " + cssMarks);
    console.log("JavaScript Marks : " + javascriptMarks);
    console.log("Total Marks : " + total);
    console.log("Average Marks : " + average);
    console.log("Grade : " + grade);
    console.log("Result : " + result);
    console.log("Attendance : " + attendance + "%");
    console.log("Attendance Status : " + attendanceStatus);
    console.log("==================================");
}

studentReport("Diksha Gupta", 90, 85, 95, 92);
studentReport("xyz", 60, 50, 68);