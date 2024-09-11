const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let num1 = Number(input[0])
let num2 = Number(input[1])

let result = num1 > num2 ? num1 - num2 : num2 - num1;
console.log(result)