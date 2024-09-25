const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = input[0];
let array = input[1].split(" ").map(Number);

let newArray = array.filter(item => item % 2 === 0)
console.log(newArray.join(" "));