/*
// ==========================================
// 1. Student Information
// ==========================================

const studentName = "Barsharani Sahu";
let age = 20;

const htmlMarks = 85;
const cssMarks = 78;
const javascriptMarks = 92;

let attendancePercentage = 88;
const isStudent = true;

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("HTML Marks:", htmlMarks);
console.log("CSS Marks:", cssMarks);
console.log("JavaScript Marks:", javascriptMarks);
console.log("Attendance:", attendancePercentage + "%");
console.log("Is Student:", isStudent);

// ==========================================
// 2. Total and Average Marks
// ==========================================

const totalMarks = htmlMarks + cssMarks + javascriptMarks;
const averageMarks = totalMarks / 3;

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);

// ==========================================
// 3. Grade Checker
// ==========================================

let grade;

if (averageMarks >= 90) {
    grade = "A+";
} else if (averageMarks >= 80) {
    grade = "A";
} else if (averageMarks >= 70) {
    grade = "B";
} else if (averageMarks >= 60) {
    grade = "C";
} else if (averageMarks >= 40) {
    grade = "D";
} else {
    grade = "Fail";
}

console.log("Grade:", grade);

// ==========================================
// 4. Subject Result Checker
// ==========================================

console.log("HTML:", htmlMarks >= 40 ? "Pass" : "Fail");
console.log("CSS:", cssMarks >= 40 ? "Pass" : "Fail");
console.log("JavaScript:", javascriptMarks >= 40 ? "Pass" : "Fail");

// ==========================================
// 5. Overall Student Result
// ==========================================

let overallResult;

if (
    htmlMarks >= 40 &&
    cssMarks >= 40 &&
    javascriptMarks >= 40
) {
    overallResult = "Student Passed";
} else {
    overallResult = "Student Failed";
}

console.log(overallResult);

// ==========================================
// 6. Internship Eligibility Checker
// ==========================================

let internshipEligibility;

if (
    age >= 18 &&
    attendancePercentage >= 75 &&
    htmlMarks >= 40 &&
    cssMarks >= 40 &&
    javascriptMarks >= 40 &&
    isStudent === true
) {
    internshipEligibility = "Eligible for ODIZO Internship";
} else {
    internshipEligibility = "Not Eligible for ODIZO Internship";
}

console.log(internshipEligibility);

// ==========================================
// 7. Attendance Status
// ==========================================

let attendanceStatus;

if (attendancePercentage >= 90) {
    attendanceStatus = "Excellent Attendance";
} else if (attendancePercentage >= 75) {
    attendanceStatus = "Good Attendance";
} else if (attendancePercentage >= 60) {
    attendanceStatus = "Low Attendance";
} else {
    attendanceStatus = "Very Low Attendance";
}

console.log("Attendance Status:", attendanceStatus);

// ==========================================
// 8. Numbers from 1 to 50
// ==========================================

console.log("Numbers from 1 to 50");

for (let i = 1; i <= 50; i++) {
    console.log(i);
}

// ==========================================
// 9. Numbers from 50 to 1
// ==========================================

console.log("Numbers from 50 to 1");

for (let i = 50; i >= 1; i--) {
    console.log(i);
}

// ==========================================
// 10. Even Numbers
// ==========================================

console.log("Even Numbers");

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// ==========================================
// 11. Odd Numbers
// ==========================================

console.log("Odd Numbers");

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// ==========================================
// 12. Even Numbers Without If
// ==========================================

console.log("Even Numbers Without If");

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// ==========================================
// 13. Odd Numbers Without If
// ==========================================

console.log("Odd Numbers Without If");

for (let i = 1; i <= 49; i += 2) {
    console.log(i);
}

// ==========================================
// 14. Sum of Numbers
// ==========================================

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Sum:", sum);

// ==========================================
// 15. Sum of Even Numbers
// ==========================================

let evenSum = 0;

for (let i = 2; i <= 50; i += 2) {
    evenSum += i;
}

console.log("Even Sum:", evenSum);

// ==========================================
// 16. Sum of Odd Numbers
// ==========================================

let oddSum = 0;

for (let i = 1; i <= 50; i += 2) {
    oddSum += i;
}

console.log("Odd Sum:", oddSum);

// ==========================================
// 17. Multiplication Table
// ==========================================

let number = 7;

console.log("Table of", number);

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + number * i);
}

// ==========================================
// 18. Multiple Tables
// ==========================================

for (let i = 2; i <= 5; i++) {

    console.log("Table of " + i);

    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + i * j);
    }
}

// ==========================================
// 19. Divisible by 3
// ==========================================

console.log("Divisible by 3");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// ==========================================
// 20. Divisible by 5
// ==========================================

console.log("Divisible by 5");

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// ==========================================
// 21. Divisible by 3 and 5
// ==========================================

console.log("Divisible by 3 and 5");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

// ==========================================
// 22. Divisible by 3 or 5
// ==========================================

console.log("Divisible by 3 or 5");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}

// ==========================================
// 23. Number Classification
// ==========================================

for (let i = 1; i <= 30; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " - Divisible by 3 and 5");
    }
    else if (i % 3 === 0) {
        console.log(i + " - Divisible by 3");
    }
    else if (i % 5 === 0) {
        console.log(i + " - Divisible by 5");
    }
    else {
        console.log(i);
    }

}

// ==========================================
// 24. Count Even Numbers
// ==========================================

let evenCount = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenCount++;
    }
}

console.log("Total Even Numbers:", evenCount);

// ==========================================
// 25. Count Odd Numbers
// ==========================================

let oddCount = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        oddCount++;
    }
}

console.log("Total Odd Numbers:", oddCount);

// ==========================================
// 26. Count Numbers Divisible by 3
// ==========================================

let divisibleByThree = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        divisibleByThree++;
    }
}

console.log("Numbers Divisible by 3:", divisibleByThree);

// ==========================================
// 27. FizzBuzz
// ==========================================

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }

}

// ==========================================
// 28. Number Pattern
// ==========================================

for (let i = 1; i <= 5; i++) {

    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += j;
    }

    console.log(pattern);
}

// ==========================================
// 29. Star Pattern
// ==========================================

for (let i = 1; i <= 5; i++) {

    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}

// ==========================================
// 30. Reverse Star Pattern
// ==========================================

for (let i = 5; i >= 1; i--) {

    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}

// ==========================================
// 31. Final Student Report
// ==========================================

console.log("========== FINAL STUDENT REPORT ==========");

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("HTML Marks:", htmlMarks);
console.log("CSS Marks:", cssMarks);
console.log("JavaScript Marks:", javascriptMarks);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log("Grade:", grade);
console.log("Attendance Percentage:", attendancePercentage + "%");
console.log("Attendance Status:", attendanceStatus);
console.log("Overall Result:", overallResult);
console.log("Internship Eligibility:", internshipEligibility);

console.log("==========================================");

//task - Functions

// 1. Simple Function

function welcomeMessage() {
    console.log("Welcome to ODIZO Internship");
}

welcomeMessage();
welcomeMessage();

// 2. Student Information

function studentInfo() {
    console.log("Student Name: Barsharani Sahu");
    console.log("College Name: Regional College of Management");
    console.log("Course: BCA");
    console.log("Semester: Final Year");
}

studentInfo();

// 3. Addition Function

function addNumbers(num1, num2) {
    console.log("Sum:", num1 + num2);
}

addNumbers(10, 20);
addNumbers(15, 25);
addNumbers(100, 200);

// 4. Subtraction Function

function subtractNumbers(num1, num2) {
    console.log("Subtraction:", num1 - num2);
}

subtractNumbers(20, 10);
subtractNumbers(50, 15);


// 5. Multiplication Function

function multiplyNumbers(num1, num2) {
    console.log("Multiplication:", num1 * num2);
}

multiplyNumbers(5, 4);


// 6. Division Function

function divideNumbers(num1, num2) {
    console.log("Division:", num1 / num2);
}

divideNumbers(20, 5);


// 7. Even or Odd Checker

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is Even Number");
    } else {
        console.log(number + " is Odd Number");
    }
}

checkEvenOdd(10);
checkEvenOdd(15);
checkEvenOdd(22);
checkEvenOdd(31);
checkEvenOdd(48);


// 8. Voting Eligibility Checker

function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log(age + " -> Eligible to Vote");
    } else {
        console.log(age + " -> Not Eligible to Vote");
    }
}

checkVotingEligibility(16);
checkVotingEligibility(18);
checkVotingEligibility(22);


// 9. Grade Checker

function checkGrade(averageMarks) {

    if (averageMarks >= 90) {
        console.log("Grade A+");
    }
    else if (averageMarks >= 80) {
        console.log("Grade A");
    }
    else if (averageMarks >= 70) {
        console.log("Grade B");
    }
    else if (averageMarks >= 60) {
        console.log("Grade C");
    }
    else if (averageMarks >= 40) {
        console.log("Grade D");
    }
    else {
        console.log("Fail");
    }

}

checkGrade(95);
checkGrade(82);
checkGrade(74);
checkGrade(65);
checkGrade(45);
checkGrade(30);

// 10. Largest Number

function findLargest(num1, num2) {

    if (num1 > num2) {
        console.log("Largest Number:", num1);
    } else {
        console.log("Largest Number:", num2);
    }

}

findLargest(10, 20);
findLargest(50, 30);
findLargest(80, 90);


// 11. Return Practice
function squareNumber(number) {
    return number * number;
}

let square = squareNumber(8);
console.log("Square:", square);

// 12. Rectangle Area

function calculateRectangleArea(length, width) {
    return length * width;
}

let rectangleArea = calculateRectangleArea(12, 5);
console.log("Rectangle Area:", rectangleArea);

// 13. Circle Area

function calculateCircleArea(radius) {
    return 3.14 * radius * radius;
}

let circleArea = calculateCircleArea(7);
console.log("Circle Area:", circleArea);
9292
// 14. Multiplication Table Using Function

function printTable(number) {

    console.log("Multiplication Table of " + number);

    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }

}

printTable(5);
printTable(8);

// 15. Final Challenge

function studentReport(studentName, htmlMarks, cssMarks, javascriptMarks, attendancePercentage) {

    let totalMarks = htmlMarks + cssMarks + javascriptMarks;
    let averageMarks = totalMarks / 3;

    let grade;

    if (averageMarks >= 90) {
        grade = "A+";
    }
    else if (averageMarks >= 80) {
        grade = "A";
    }
    else if (averageMarks >= 70) {
        grade = "B";
    }
    else if (averageMarks >= 60) {
        grade = "C";
    }
    else if (averageMarks >= 40) {
        grade = "D";
    }
    else {
        grade = "Fail";
    }

    let passStatus;

    if (averageMarks >= 40) {
        passStatus = "Pass";
    } else {
        passStatus = "Fail";
    }

    let attendanceStatus;

    if (attendancePercentage >= 75) {
        attendanceStatus = "Good Attendance";
    } else {
        attendanceStatus = "Low Attendance";
    }

    console.log("----------------------------------");
    console.log("Student Name:", studentName);
    console.log("HTML Marks:", htmlMarks);
    console.log("CSS Marks:", cssMarks);
    console.log("JavaScript Marks:", javascriptMarks);
    console.log("Total Marks:", totalMarks);
    console.log("Average Marks:", averageMarks);
    console.log("Grade:", grade);
    console.log("Result:", passStatus);
    console.log("Attendance:", attendancePercentage + "%");
    console.log("Attendance Status:", attendanceStatus);
    console.log("----------------------------------");

}

studentReport("Barsharani Sahu", 90, 85, 95, 92);

studentReport("Rahul Das", 55, 65, 70, 68);
*/

// ==========================================
// JavaScript Task 9 - Arrays + Functions + Logic Building
// ==========================================

// ==========================================
// 1. Create an Array
// ==========================================

const students = [
    "Barsharani",
    "Rahul",
    "Priya",
    "Amit",
    "Sneha",
    "Rohan",
    "Anjali",
    "Suman",
    "Neha",
    "Karan"
];

console.log("Complete Students Array:");
console.log(students);

console.log("First Student:", students[0]);
console.log("Middle Student:", students[5]);
console.log("Last Student:", students[students.length - 1]);


// ==========================================
// 2. Numbers Array
// ==========================================

const numbers = [12, 25, 18, 40, 33, 56, 71, 80, 9, 100, 45, 60, 27, 14, 50];

console.log("\nNumbers Array:");

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// ==========================================
// 3. Sum Function
// ==========================================

function calculateSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

let totalSum = calculateSum(numbers);
console.log("\nTotal Sum:", totalSum);


// ==========================================
// 4. Average Function
// ==========================================

function calculateAverage(arr) {
    let sum = calculateSum(arr);
    return sum / arr.length;
}

console.log("Average:", calculateAverage(numbers));


// ==========================================
// 5. Largest Number
// ==========================================

function findLargest(arr) {

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > largest) {
            largest = arr[i];
        }

    }

    return largest;
}

console.log("Largest Number:", findLargest(numbers));


// ==========================================
// 6. Smallest Number
// ==========================================

function findSmallest(arr) {

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < smallest) {
            smallest = arr[i];
        }

    }

    return smallest;
}

console.log("Smallest Number:", findSmallest(numbers));


// ==========================================
// 7. Even and Odd Counter
// ==========================================

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

    console.log("Total Even Numbers:", even);
    console.log("Total Odd Numbers:", odd);

}

countEvenOdd(numbers);


// ==========================================
// 8. Search an Element
// ==========================================

function searchElement(arr, value) {

    let found = false;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === value) {
            found = true;
            break;
        }

    }

    if (found) {
        console.log(value, "- Element Found");
    } else {
        console.log(value, "- Element Not Found");
    }

}

searchElement(numbers, 40);
searchElement(numbers, 99);


// ==========================================
// 9. Reverse Printing
// ==========================================

function reverseArray(arr) {

    console.log("\nReverse Order:");

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }

}

reverseArray(numbers);


// ==========================================
// 10. Student Marks Report
// ==========================================

const studentNames = [
    "Barsharani",
    "Rahul",
    "Priya",
    "Amit",
    "Sneha"
];

const studentMarks = [92, 35, 78, 60, 45];

console.log("\nStudent Marks Report");

for (let i = 0; i < studentNames.length; i++) {

    let status;

    if (studentMarks[i] >= 40) {
        status = "Passed";
    } else {
        status = "Failed";
    }

    console.log(studentNames[i] + " - " + studentMarks[i] + " - " + status);

}


// ==========================================
// 11. Grade Report
// ==========================================

console.log("\nGrade Report");

for (let i = 0; i < studentMarks.length; i++) {

    let grade;

    if (studentMarks[i] >= 90) {
        grade = "A+";
    } else if (studentMarks[i] >= 80) {
        grade = "A";
    } else if (studentMarks[i] >= 70) {
        grade = "B";
    } else if (studentMarks[i] >= 60) {
        grade = "C";
    } else if (studentMarks[i] >= 40) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    console.log(studentNames[i] + " : Grade " + grade);

}


// ==========================================
// 12. Attendance Report
// ==========================================

const attendanceArray = [95, 82, 72, 58, 91];

console.log("\nAttendance Report");

for (let i = 0; i < attendance.length; i++) {

    let status;

    if (attendance[i] >= 90) {
        status = "Excellent Attendance";
    } else if (attendance[i] >= 75) {
        status = "Good Attendance";
    } else if (attendance[i] >= 60) {
        status = "Average Attendance";
    } else {
        status = "Poor Attendance";
    }

    console.log(studentNames[i] + " - " + attendance[i] + "% - " + status);

}


// ==========================================
// 13. Multiplication Tables
// ==========================================

const tableNumbers = [2, 3, 4, 5];

function printMultiplicationTable(number) {

    console.log("\nTable of " + number);

    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }

}

for (let i = 0; i < tableNumbers.length; i++) {
    printMultiplicationTable(tableNumbers[i]);
}


// ==========================================
// 14. Positive, Negative and Zero
// ==========================================

const values = [-10, 15, 0, 22, -5, 8, 0, -12, 30];

function countValues(arr) {

    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }

    }

    console.log("\nPositive Numbers:", positive);
    console.log("Negative Numbers:", negative);
    console.log("Zero Values:", zero);

}

countValues(values);


// ==========================================
// 15. Bonus Challenge
// ==========================================

const htmlMarksArray = [90, 35, 80, 65, 50];
const cssMarksArray = [88, 40, 75, 60, 55];
const javascriptMarksArray = [95, 30, 82, 70, 45];

function generateStudentReport(names, html, css, js, attendanceArray) {

    console.log("\n========== Student Report ==========");

    for (let i = 0; i < names.length; i++) {

        let total = html[i] + css[i] + js[i];
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

        let passStatus;

        if (average >= 40) {
            passStatus = "Pass";
        } else {
            passStatus = "Fail";
        }

        let attendanceStatus;

        if (attendanceArray[i] >= 90) {
            attendanceStatus = "Excellent";
        } else if (attendanceArray[i] >= 75) {
            attendanceStatus = "Good";
        } else if (attendanceArray[i] >= 60) {
            attendanceStatus = "Average";
        } else {
            attendanceStatus = "Poor";
        }

        console.log("\nStudent:", names[i]);
        console.log("HTML Marks:", html[i]);
        console.log("CSS Marks:", css[i]);
        console.log("JavaScript Marks:", js[i]);
        console.log("Total:", total);
        console.log("Average:", average);
        console.log("Grade:", grade);
        console.log("Result:", passStatus);
        console.log("Attendance:", attendanceArray[i] + "%");
        console.log("Attendance Status:", attendanceStatus);

    }

}

generateStudentReport(
    studentNames,
    htmlMarksArray,
    cssMarksArray,
    javascriptMarksArray,
    attendanceArray
);