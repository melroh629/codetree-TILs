const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = input[0];
let numbers = input[1].split(" ").map(Number);
let answer = "";
numbers.forEach(item => {
    answer += `${Math.pow(item, 2)} `;
})

console.log(answer);