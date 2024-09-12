const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);
let num3 = Number(input[2]);

let ans1, ans2;
if(num1 < num2 && num1 < num3) { //최소값 구하는 곳
    ans1 = 1;
} else {
    ans1 =0;
}

if(num1 === num2 === num3) {
    ans2 = 1;
} else {
    ans2 = 0;
}

console.log(ans1,ans2)