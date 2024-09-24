const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let counts = Number(input[0]);
let student1 = input[1].split(" ").map(Number);
let student2 = input[2].split(" ").map(Number);
let student3 = input[3].split(" ").map(Number);

let pass = 0;

const getAverage = array => {
    let sum = array.reduce((acc, curr) => acc + curr);
    let average = sum / array.length;
    
    return average;
}


let score = getAverage(array);
if(score >= 60) {
    console.log('pass');
    pass++;
} else {
    console.log('fail');
}
console.log(pass);