const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);

let sum = num1 + num2;
let minus = num1 - num2;
let division = parseInt(num1 / num2);
let remain = num1%num2;
console.log(`${sum}\n${minus}\n${division}\n${remain}`)