const fs = require("fs");
let a = fs.readFileSync(0).toString().split(' ');


let num1 = Number(a[0]);
let num2 = Number(a[1])

console.log(`${num1} ${num2} ${num1+num2}`)