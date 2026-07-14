// ==========================================
// 1. Simple Function
// ==========================================

function welcomeMessage() {
    console.log("Welcome to ODIZO Internship");
}

welcomeMessage();
welcomeMessage();

// ==========================================
// 2. Student Information
// ==========================================

function studentInfo() {
    console.log("\nStudent Information");
    console.log("Student Name: Akash");
    console.log("College Name: RCM Bhubaneswar");
    console.log("Course: MCA");
    console.log("Semester: 2nd");
}

studentInfo();

// ==========================================
// 3. Addition Function
// ==========================================

function addNumbers(num1, num2) {
    console.log("Addition:", num1 + num2);
}

addNumbers(10, 20);
addNumbers(30, 15);
addNumbers(50, 25);

// ==========================================
// 4. Subtraction Function
// ==========================================

function subtractNumbers(num1, num2) {
    console.log("Subtraction:", num1 - num2);
}

subtractNumbers(20, 10);
subtractNumbers(50, 15);

// ==========================================
// 5. Multiplication Function
// ==========================================

function multiplyNumbers(num1, num2) {
    console.log("Multiplication:", num1 * num2);
}

multiplyNumbers(5, 6);

// ==========================================
// 6. Division Function
// ==========================================

function divideNumbers(num1, num2) {
    console.log("Division:", num1 / num2);
}

divideNumbers(20, 5);

// ==========================================
// 7. Even or Odd Checker
// ==========================================

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " - Even Number");
    } else {
        console.log(number + " - Odd Number");
    }
}

checkEvenOdd(2);
checkEvenOdd(7);
checkEvenOdd(10);
checkEvenOdd(15);
checkEvenOdd(18);

// ==========================================
// 8. Voting Eligibility Checker
// ==========================================

function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log(age + " - Eligible to Vote");
    } else {
        console.log(age + " - Not Eligible to Vote");
    }
}

checkVotingEligibility(16);
checkVotingEligibility(18);
checkVotingEligibility(25);

// ==========================================
// 9. Grade Checker
// ==========================================

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
checkGrade(82);
checkGrade(71);
checkGrade(55);

// ==========================================
// 10. Largest Number
// ==========================================

function findLargest(num1, num2) {

    if (num1 > num2) {
        console.log("Largest Number:", num1);
    } else {
        console.log("Largest Number:", num2);
    }
}

findLargest(20, 30);
findLargest(90, 50);
findLargest(15, 10);

// ==========================================
// 11. Return Practice
// ==========================================

function squareNumber(number) {
    return number * number;
}

let square = squareNumber(8);

console.log("Square:", square);

// ==========================================
// 12. Rectangle Area
// ==========================================

function calculateRectangleArea(length, width) {
    return length * width;
}

let rectangleArea = calculateRectangleArea(12, 6);

console.log("Rectangle Area:", rectangleArea);

// ==========================================
// 13. Circle Area
// ==========================================

function calculateCircleArea(radius) {
    return 3.14 * radius * radius;
}

let circleArea = calculateCircleArea(7);

console.log("Circle Area:", circleArea);

// ==========================================
// 14. Multiplication Table
// ==========================================

function printTable(number) {

    console.log("\nTable of " + number);

    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + number * i);
    }
}

printTable(5);
printTable(8);

// ==========================================
// 15. Final Challenge
// ==========================================

function studentReport(name, html, css, javascript, attendance) {

    let total = html + css + javascript;
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

    if (html >= 40 && css >= 40 && javascript >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    let attendanceStatus;

    if (attendance >= 90) {
        attendanceStatus = "Excellent Attendance";
    } else if (attendance >= 75) {
        attendanceStatus = "Good Attendance";
    } else if (attendance >= 60) {
        attendanceStatus = "Low Attendance";
    } else {
        attendanceStatus = "Very Low Attendance";
    }

    console.log("\n==============================");
    console.log("Student Report");
    console.log("==============================");
    console.log("Student Name:", name);
    console.log("HTML Marks:", html);
    console.log("CSS Marks:", css);
    console.log("JavaScript Marks:", javascript);
    console.log("Attendance:", attendance + "%");
    console.log("Total Marks:", total);
    console.log("Average Marks:", average);
    console.log("Grade:", grade);
    console.log("Result:", result);
    console.log("Attendance Status:", attendanceStatus);
    console.log("==============================");
}

studentReport("Akash", 90, 85, 92, 88);

studentReport("Rahul", 55, 65, 38, 72);