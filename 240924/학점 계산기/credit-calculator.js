const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let counts = Number(input[0]);
let points = input[1].split(' ').map(Number);
let sum = points.reduce((acc, curr) => acc+curr,0);
let avergage = (sum / counts).toFixed(1);
let grade;

if(avergage >= 4.0) {
    grade = "Perfect"
} else if( avergage >= 3.0) {
    grade = "Good"
} else {
    grade = "Poor"
}

console.log(`${avergage}\n${grade}`)