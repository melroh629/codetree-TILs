const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let counts = Number(input[0]);
// let student1 = input[1].split(" ").map(Number);
// let student2 = input[2].split(" ").map(Number);
// let student3 = input[3].split(" ").map(Number);

let students = input.slice(1);
let count=0;
for(let i=0; i<students.length; i++){
    let scores = students[i].split(' ').map(Number);
    let sum = scores.reduce((acc, curr) => acc + curr,0);
    sum = sum / scores.length;
  
    if(sum >= 60) {
        console.log('pass');
        count++;
    } else {
        console.log('fail');
    }
    
}
console.log(count);