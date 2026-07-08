const javascriptMarks = 88;
const htmlMarks = 82;
const cssMarks = 79;

const averageMarks = (javascriptMarks + htmlMarks + cssMarks) / 3;

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