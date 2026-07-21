// =============================================
// Question 1 - Students Array
// =============================================

const students = [
    "Akash",
    "Rahul",
    "Rohan",
    "Priya",
    "Neha",
    "Ankit",
    "Amit",
    "Suman",
    "Pooja",
    "Riya"
];

console.log("Students Array:");
console.log(students);

console.log("First Student:", students[0]);
console.log("Middle Student:", students[Math.floor(students.length / 2)]);
console.log("Last Student:", students[students.length - 1]);


// =============================================
// Question 2 - Numbers Array
// =============================================

const numbers = [10, 25, 33, 48, 52, 67, 71, 84, 90, 11, 29, 35, 46, 58, 99];

console.log("\nNumbers Array:");

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// =============================================
// Question 3 - Calculate Sum
// =============================================

function calculateSum(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log("\nTotal Sum =", calculateSum(numbers));


// =============================================
// Question 4 - Calculate Average
// =============================================

function calculateAverage(arr) {

    let total = calculateSum(arr);

    return total / arr.length;
}

console.log("Average =", calculateAverage(numbers));


// =============================================
// Question 5 - Find Largest Number
// =============================================

function findLargest(arr) {

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > largest) {
            largest = arr[i];
        }

    }

    return largest;
}

console.log("Largest Number =", findLargest(numbers));


// =============================================
// Question 6 - Find Smallest Number
// =============================================

function findSmallest(arr) {

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < smallest) {
            smallest = arr[i];
        }

    }

    return smallest;
}

console.log("Smallest Number =", findSmallest(numbers));


// =============================================
// Question 7 - Count Even and Odd
// =============================================

function countEvenOdd(arr) {

    let even = 0;
    let odd = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }

    }

    console.log("Even Numbers =", even);
    console.log("Odd Numbers =", odd);
}

countEvenOdd(numbers);


// =============================================
// Question 8 - Search Element
// =============================================

function searchElement(arr, value) {

    let found = false;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === value) {
            found = true;
            break;
        }

    }

    if (found) {
        console.log("Element Found");
    } else {
        console.log("Element Not Found");
    }

}

searchElement(numbers, 84);
searchElement(numbers, 100);


// =============================================
// Question 9 - Reverse Array Printing
// =============================================

function reverseArray(arr) {

    console.log("\nReverse Order:");

    for (let i = arr.length - 1; i >= 0; i--) {

        console.log(arr[i]);

    }

}

reverseArray(numbers);


// =============================================
// Question 10 - Student Marks Report
// =============================================

const studentNames = [
    "Akash",
    "Rahul",
    "Priya",
    "Rohan",
    "Neha"
];

const studentMarks = [
    95,
    82,
    38,
    71,
    56
];

console.log("\nStudent Marks Report");

for (let i = 0; i < studentNames.length; i++) {

    let result;

    if (studentMarks[i] >= 40) {
        result = "Passed";
    } else {
        result = "Failed";
    }

    console.log(studentNames[i] + " - " + studentMarks[i] + " - " + result);

}


// =============================================
// Question 11 - Grade Report
// =============================================

console.log("\nGrade Report");

for (let i = 0; i < studentMarks.length; i++) {

    let mark = studentMarks[i];
    let grade;

    if (mark >= 90) {
        grade = "A+";
    }
    else if (mark >= 80) {
        grade = "A";
    }
    else if (mark >= 70) {
        grade = "B";
    }
    else if (mark >= 60) {
        grade = "C";
    }
    else if (mark >= 40) {
        grade = "D";
    }
    else {
        grade = "Fail";
    }

    console.log(studentNames[i], "-", grade);

}


// =============================================
// Question 12 - Attendance Report
// =============================================

const attendance = [95, 88, 72, 60, 45];

console.log("\nAttendance Report");

for (let i = 0; i < attendance.length; i++) {

    let status;

    if (attendance[i] >= 90) {
        status = "Excellent Attendance";
    }
    else if (attendance[i] >= 75) {
        status = "Good Attendance";
    }
    else if (attendance[i] >= 60) {
        status = "Average Attendance";
    }
    else {
        status = "Poor Attendance";
    }

    console.log(studentNames[i], "-", status);

}


// =============================================
// Question 13 - Multiplication Tables
// =============================================

const tableNumbers = [2, 3, 4, 5];

function printTable(number) {

    console.log("\nTable of", number);

    for (let i = 1; i <= 10; i++) {

        console.log(number + " x " + i + " = " + number * i);

    }

}

for (let i = 0; i < tableNumbers.length; i++) {

    printTable(tableNumbers[i]);

}


// =============================================
// Question 14 - Positive Negative Zero
// =============================================

const values = [5, -8, 0, 7, -2, 9, 0, -6, 3];

function countValues(arr) {

    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            positive++;
        }
        else if (arr[i] < 0) {
            negative++;
        }
        else {
            zero++;
        }

    }

    console.log("\nPositive =", positive);
    console.log("Negative =", negative);
    console.log("Zero =", zero);

}

countValues(values);


// =============================================
// Question 15 - Bonus Challenge
// =============================================

const htmlMarks = [90, 75, 50, 82, 60];
const cssMarks = [88, 80, 40, 79, 55];
const jsMarks = [92, 70, 35, 85, 65];

function generateStudentReport(names, html, css, js, attendance) {

    console.log("\nStudent Final Report");

    for (let i = 0; i < names.length; i++) {

        let total = html[i] + css[i] + js[i];
        let average = total / 3;

        let grade;

        if (average >= 90)
            grade = "A+";
        else if (average >= 80)
            grade = "A";
        else if (average >= 70)
            grade = "B";
        else if (average >= 60)
            grade = "C";
        else if (average >= 40)
            grade = "D";
        else
            grade = "Fail";

        let result;

        if (average >= 40)
            result = "Pass";
        else
            result = "Fail";

        let attendanceStatus;

        if (attendance[i] >= 90)
            attendanceStatus = "Excellent";
        else if (attendance[i] >= 75)
            attendanceStatus = "Good";
        else if (attendance[i] >= 60)
            attendanceStatus = "Average";
        else
            attendanceStatus = "Poor";

        console.log("--------------------------------");

        console.log("Student :", names[i]);
        console.log("HTML :", html[i]);
        console.log("CSS :", css[i]);
        console.log("JavaScript :", js[i]);
        console.log("Total :", total);
        console.log("Average :", average.toFixed(2));
        console.log("Grade :", grade);
        console.log("Result :", result);
        console.log("Attendance :", attendanceStatus);

    }

}

generateStudentReport(
    studentNames,
    htmlMarks,
    cssMarks,
    jsMarks,
    attendance
);