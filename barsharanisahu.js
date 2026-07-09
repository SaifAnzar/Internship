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