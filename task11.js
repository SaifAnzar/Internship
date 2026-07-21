
// ---------------------------------
// 1. Create an Array
// ---------------------------------
console.log("1. Student Array");

let students = [
  "Ankita",
  "Riya",
  "sagarika",
  "Priya",
  "Neha",
  "Debasmit",
  "Ankit",
  "Sneha",
  "reena",
  "Diksha"
];

console.log("Complete Array:", students);
console.log("First Student:", students[0]);
console.log("Middle Student:", students[Math.floor(students.length / 2)]);
console.log("Last Student:", students[students.length - 1]);

// ---------------------------------
// 2. Numbers Array
// ---------------------------------
console.log("\n2. Numbers Array");

let numbers = [12, 25, 30, 18, 45, 60, 72, 84, 91, 100, 5, 7, 55, 68, 90];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// ---------------------------------
// 3. Sum Function
// ---------------------------------
console.log("\n3. Sum Function");

function calculateSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log("Total Sum:", calculateSum(numbers));

// ---------------------------------
// 4. Average Function
// ---------------------------------
console.log("\n4. Average Function");

function calculateAverage(arr) {
  let sum = calculateSum(arr);
  return sum / arr.length;
}

console.log("Average:", calculateAverage(numbers));

// ---------------------------------
// 5. Largest Number
// ---------------------------------
console.log("\n5. Largest Number");

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

// ---------------------------------
// 6. Smallest Number
// ---------------------------------
console.log("\n6. Smallest Number");

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

// ---------------------------------
// 7. Even and Odd Counter
// ---------------------------------
console.log("\n7. Even and Odd Counter");

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

// ---------------------------------
// 8. Search an Element
// ---------------------------------
console.log("\n8. Search Element");

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

searchElement(numbers, 60);
searchElement(numbers, 200);

// ---------------------------------
// 9. Reverse Printing
// ---------------------------------
console.log("\n9. Reverse Array");

function reverseArray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

reverseArray(numbers);

// ---------------------------------
// 10. Student Marks Report
// ---------------------------------
console.log("\n10. Student Marks Report");

let studentNames = ["Aman", "Riya", "Rahul", "Priya", "Diksha"];
let studentMarks = [95, 76, 32, 58, 88];

for (let i = 0; i < studentNames.length; i++) {
  let status;

  if (studentMarks[i] >= 40) {
    status = "Passed";
  } else {
    status = "Failed";
  }

  console.log(studentNames[i] + " - " + studentMarks[i] + " - " + status);
}

// ---------------------------------
// 11. Grade Report
// ---------------------------------
console.log("\n11. Grade Report");

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

  console.log(studentNames[i] + " - Grade: " + grade);
}

// ---------------------------------
// 12. Attendance Report
// ---------------------------------
console.log("\n12. Attendance Report");

let attendance = [95, 82, 74, 58, 90];

for (let i = 0; i < attendance.length; i++) {
  if (attendance[i] >= 90) {
    console.log(studentNames[i] + " - Excellent Attendance");
  } else if (attendance[i] >= 75) {
    console.log(studentNames[i] + " - Good Attendance");
  } else if (attendance[i] >= 60) {
    console.log(studentNames[i] + " - Average Attendance");
  } else {
    console.log(studentNames[i] + " - Poor Attendance");
  }
}

// ---------------------------------
// 13. Multiplication Tables
// ---------------------------------
console.log("\n13. Multiplication Tables");

let tableNumbers = [2, 3, 4, 5];

function printTable(num) {
  console.log("\nTable of " + num);

  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
  }
}

for (let i = 0; i < tableNumbers.length; i++) {
  printTable(tableNumbers[i]);
}

// ---------------------------------
// 14. Positive, Negative and Zero
// ---------------------------------
console.log("\n14. Positive, Negative and Zero");

let values = [-5, 10, 0, -8, 15, 0, 20, -2];

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

  console.log("Positive Numbers:", positive);
  console.log("Negative Numbers:", negative);
  console.log("Zero Values:", zero);
}

countValues(values);

// ---------------------------------
// 15. Bonus Challenge
// ---------------------------------
console.log("\n15. Student Report");

let htmlMarks = [90, 75, 40, 60, 88];
let cssMarks = [92, 70, 35, 65, 90];
let jsMarks = [95, 80, 30, 70, 85];

function generateStudentReport(names, html, css, js, attend) {

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

    let result;
    if (average >= 40) {
      result = "Passed";
    } else {
      result = "Failed";
    }

    let attendanceStatus;

    if (attend[i] >= 90) {
      attendanceStatus = "Excellent";
    } else if (attend[i] >= 75) {
      attendanceStatus = "Good";
    } else if (attend[i] >= 60) {
      attendanceStatus = "Average";
    } else {
      attendanceStatus = "Poor";
    }

    console.log("--------------------------------");
    console.log("Student Name: " + names[i]);
    console.log("HTML Marks: " + html[i]);
    console.log("CSS Marks: " + css[i]);
    console.log("JavaScript Marks: " + js[i]);
    console.log("Total Marks: " + total);
    console.log("Average Marks: " + average);
    console.log("Grade: " + grade);
    console.log("Result: " + result);
    console.log("Attendance: " + attendanceStatus);
  }
}

generateStudentReport(studentNames, htmlMarks, cssMarks, jsMarks, attendance);