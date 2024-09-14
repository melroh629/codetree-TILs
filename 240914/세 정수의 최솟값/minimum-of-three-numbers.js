const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);
let num3 = Number(input[1]);

// 정렬로 숫자를 오름차순으로 정리한다.
// 오름차순에서의 가장 첫번째 숫자

let sorted = input.sort((a,b) => a - b);

console.log(sorted[0])