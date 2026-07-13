// ==========================================
// 1. Student Information
// ==========================================

const studentName = "Akash";
const age = 22;

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

console.log("\nTotal Marks:", totalMarks);
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

console.log("\nSubject Results");

if (htmlMarks >= 40) {
    console.log("HTML: Pass");
} else {
    console.log("HTML: Fail");
}

if (cssMarks >= 40) {
    console.log("CSS: Pass");
} else {
    console.log("CSS: Fail");
}

if (javascriptMarks >= 40) {
    console.log("JavaScript: Pass");
} else {
    console.log("JavaScript: Fail");
}

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

console.log("\nOverall Result:", overallResult);

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
    isStudent
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
// 8. Numbers 1 to 50
// ==========================================

console.log("\nNumbers 1 to 50");

for (let i = 1; i <= 50; i++) {
    console.log(i);
}

// ==========================================
// 9. Reverse Numbers
// ==========================================

console.log("\nNumbers 50 to 1");

for (let i = 50; i >= 1; i--) {
    console.log(i);
}

// ==========================================
// 10. Even Numbers
// ==========================================

console.log("\nEven Numbers");

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// ==========================================
// 11. Odd Numbers
// ==========================================

console.log("\nOdd Numbers");

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// ==========================================
// 12. Even Numbers Without If
// ==========================================

console.log("\nEven Numbers Without If");

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// ==========================================
// 13. Odd Numbers Without If
// ==========================================

console.log("\nOdd Numbers Without If");

for (let i = 1; i <= 49; i += 2) {
    console.log(i);
}

// ==========================================
// 14. Sum 1 to 100
// ==========================================

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("\nSum of 1 to 100:", sum);

// ==========================================
// 15. Sum of Even Numbers
// ==========================================

let evenSum = 0;

for (let i = 2; i <= 50; i += 2) {
    evenSum += i;
}

console.log("Sum of Even Numbers:", evenSum);

// ==========================================
// 16. Sum of Odd Numbers
// ==========================================

let oddSum = 0;

for (let i = 1; i <= 50; i += 2) {
    oddSum += i;
}

console.log("Sum of Odd Numbers:", oddSum);

// ==========================================
// 17. Multiplication Table
// ==========================================

const number = 7;

console.log("\nTable of", number);

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + number * i);
}

// ==========================================
// 18. Tables 2 to 5
// ==========================================

for (let table = 2; table <= 5; table++) {

    console.log("\nTable of " + table);

    for (let i = 1; i <= 10; i++) {
        console.log(table + " x " + i + " = " + table * i);
    }
}

// ==========================================
// 19. Divisible by 3
// ==========================================

console.log("\nDivisible by 3");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// ==========================================
// 20. Divisible by 5
// ==========================================

console.log("\nDivisible by 5");

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// ==========================================
// 21. Divisible by 3 and 5
// ==========================================

console.log("\nDivisible by 3 and 5");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

// ==========================================
// 22. Divisible by 3 or 5
// ==========================================

console.log("\nDivisible by 3 or 5");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}

// ==========================================
// 23. Number Classification
// ==========================================

console.log("\nNumber Classification");

for (let i = 1; i <= 30; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " - Divisible by 3 and 5");
    } else if (i % 3 === 0) {
        console.log(i + " - Divisible by 3");
    } else if (i % 5 === 0) {
        console.log(i + " - Divisible by 5");
    } else {
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

console.log("\nTotal Even Numbers:", evenCount);

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
// 26. Count Divisible by 3
// ==========================================

let divisibleBy3 = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        divisibleBy3++;
    }
}

console.log("Numbers Divisible by 3:", divisibleBy3);

// ==========================================
// 27. FizzBuzz
// ==========================================

console.log("\nFizzBuzz");

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// ==========================================
// 28. Number Pattern
// ==========================================

console.log("\nNumber Pattern");

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

console.log("\nStar Pattern");

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

console.log("\nReverse Star Pattern");

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

console.log("\n==================================");
console.log("FINAL STUDENT REPORT");
console.log("==================================");

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("HTML Marks:", htmlMarks);
console.log("CSS Marks:", cssMarks);
console.log("JavaScript Marks:", javascriptMarks);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log("Grade:", grade);
console.log("Attendance:", attendancePercentage + "%");
console.log("Attendance Status:", attendanceStatus);
console.log("Overall Result:", overallResult);
console.log("Internship Eligibility:", internshipEligibility);

console.log("==================================");