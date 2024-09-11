const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let num1 = Number(input[0])
let num2 = Number(input[1])
let num3 = Number(input[2])

let sum = num1 + num2 + num3;
let average = sum / 3;
let remain = sum - average;

console.log(`${sum}\n${average}\n${remain}`)