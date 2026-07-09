x += 5;
x -= 2;
x *= 3;
x /= 2;
// Cleaned up merged JavaScript file: consolidated content without conflict markers

console.log("===== STUDENT RESULT SUMMARY =====");
const studentName = "Barsharani Sahu";
console.log("Student Name: " + studentName);
const rollNumber = "24BCA013";
console.log("Roll Number: " + rollNumber);
let age = 19;
console.log("Age: " + age);
const collegeName = "Regional College of Management, Bhubaneswar";
console.log("College: " + collegeName);
const course = "BCA";
console.log("Course: " + course);
let city = "Bhubaneswar";
console.log("City: " + city);
const isStudent = true;
console.log("Is Student: " + isStudent);

// Subject Marks
let javascriptMarks = 85;
let htmlMarks = 78;
let cssMarks = 82;
let databaseMarks = 88;
let gitMarks = 92;

console.log("JavaScript Marks: " + javascriptMarks);
console.log("HTML Marks: " + htmlMarks);
console.log("CSS Marks: " + cssMarks);
console.log("Database Marks: " + databaseMarks);
console.log("Git Marks: " + gitMarks);

// Calculations
let totalMarks = javascriptMarks + htmlMarks + cssMarks + databaseMarks + gitMarks;
const maximumMarks = 500;
let averageMarks = totalMarks / 5;
console.log("Total Marks: " + totalMarks);
console.log("Maximum Marks: " + maximumMarks);
console.log("Average Marks: " + averageMarks);

// Data Types examples
let myString = "Biology";
let myNumber = 100;
let myBoolean = true;
let myNull = null;
let myUndefined;
console.log("Type of String: " + typeof myString);
console.log("Type of Number: " + typeof myNumber);
console.log("Type of Boolean: " + typeof myBoolean);
console.log("Type of Null: " + typeof myNull);
console.log("Type of Undefined: " + typeof myUndefined);

// Arithmetic Operators
let a = 20, b = 2;
console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b));

// Comparison Operators
console.log("HTML > CSS : " + (htmlMarks > cssMarks));
console.log("HTML === CSS : " + (htmlMarks === cssMarks));

// == and ===
let numberValue = 100;
let stringValue = "100";
console.log("Using == : " + (numberValue == stringValue));
console.log("Using === : " + (numberValue === stringValue));

// Voting Eligibility
if (age >= 18) console.log("Eligible to Vote"); else console.log("Not Eligible to Vote");

// Even or Odd
let number = 15;
console.log(number + ((number % 2 == 0) ? " is Even" : " is Odd"));

// Student Grade (using average of three main subjects)
let avgThree = (javascriptMarks + htmlMarks + cssMarks) / 3;
console.log("Average Marks (3 subjects): " + avgThree);
if (avgThree >= 80) console.log("Grade A");
else if (avgThree >= 60) console.log("Grade B");
else if (avgThree >= 40) console.log("Grade C");
else console.log("Fail");

// Internship Eligibility Checker
let attendancePercentage = 90;
if (age >= 18 && attendancePercentage >= 75 && isStudent === true) console.log("Eligible for Internship");
else console.log("Not Eligible for Internship");

// Logical Operator examples
console.log("AND Operator: " + (age >= 18 && attendancePercentage >= 75));
console.log("OR Operator: " + (age >= 18 || attendancePercentage >= 95));
console.log("NOT Operator: " + (!isStudent));

// More comparisons
console.log("10 == '10' : " + (10 == "10"));
console.log("10 === '10' : " + (10 === "10"));
console.log("10 != 20 : " + (10 != 20));
