const studentName = "Diksha Gupta";
const rollNumber = 101;
const age = 20;
const collegeName = "Regional College of Management";
const course = "Full Stack Web Development";
const city = "Bhubaneswar";
const isStudent = true;

const htmlMarks = 85;
const cssMarks = 78;
const jsMarks = 90;
const databaseMarks = 72;
const gitMarks = 88;

const totalMarks = htmlMarks + cssMarks + jsMarks + databaseMarks + gitMarks;
const maximumMarks = 5 * 100;
const averageMarks = totalMarks / 5;

const resultSummary =
  "========== STUDENT RESULT SUMMARY ==========" + "\n" +
  "Student Name : " + studentName + "\n" +
  "Roll Number  : " + rollNumber + "\n" +
  "College      : " + collegeName + "\n" +
  "Course       : " + course + "\n" +
  "City         : " + city + "\n" +
  "--------------------------------------------" + "\n" +
  "HTML Marks       : " + htmlMarks + "\n" +
  "CSS Marks        : " + cssMarks + "\n" +
  "JavaScript Marks : " + jsMarks + "\n" +
  "Database Marks   : " + databaseMarks + "\n" +
  "Git Marks        : " + gitMarks + "\n" +
  "--------------------------------------------" + "\n" +
  "Total Marks   : " + totalMarks + "\n" +
  "Maximum Marks : " + maximumMarks + "\n" +
  "Average Marks : " + averageMarks + "\n" +
  "============================================";

console.log(resultSummary);

const exampleString = "Hello ODIZO";
const exampleNumber = 42;
const exampleBoolean = false;
const exampleNull = null;
let exampleUndefined;

console.log("----- DATA TYPE VALUES -----");
console.log("String    : " + exampleString);
console.log("Number    : " + exampleNumber);
console.log("Boolean   : " + exampleBoolean);
console.log("Null      : " + exampleNull);
console.log("Undefined : " + exampleUndefined);

console.log("----- typeof RESULTS -----");
console.log("typeof studentName : " + typeof studentName);
console.log("typeof rollNumber  : " + typeof rollNumber);
console.log("typeof isStudent   : " + typeof isStudent);
console.log("typeof exampleNull : " + typeof exampleNull);
console.log("typeof exampleUndefined : " + typeof exampleUndefined);

let firstNumber = 20;
let secondNumber = 6;

console.log("----- ARITHMETIC OPERATORS -----");
console.log("Addition (20 + 6)       : " + (firstNumber + secondNumber));
console.log("Subtraction (20 - 6)    : " + (firstNumber - secondNumber));
console.log("Multiplication (20 * 6) : " + (firstNumber * secondNumber));
console.log("Division (20 / 6)       : " + (firstNumber / secondNumber));
console.log("Modulus (20 % 6)        : " + (firstNumber % secondNumber));

let counter = 10;
counter++;
console.log("After Increment (10++) : " + counter);
counter--;
console.log("After Decrement (11--) : " + counter);

let value = 100;
value += 50;
console.log("After +=50 : " + value);
value -= 30;
console.log("After -=30 : " + value);
value *= 2;
console.log("After *=2  : " + value);
value /= 4;
console.log("After /=4  : " + value);

console.log("----- COMPARISON RESULTS (HTML=85, CSS=78) -----");
console.log("HTML >  CSS : " + (htmlMarks > cssMarks));
console.log("HTML <  CSS : " + (htmlMarks < cssMarks));
console.log("HTML >= CSS : " + (htmlMarks >= cssMarks));
console.log("HTML <= CSS : " + (htmlMarks <= cssMarks));
console.log("HTML == CSS : " + (htmlMarks == cssMarks));
console.log("HTML === CSS: " + (htmlMarks === cssMarks));
console.log("HTML != CSS : " + (htmlMarks != cssMarks));

const numberValue = 100;
const stringValue = "100";

console.log("----- TRICKY PART: == vs === -----");
console.log("100 == '100'  : " + (numberValue == stringValue));
console.log("100 === '100' : " + (numberValue === stringValue));
