const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);


let minNumber;
if(a <= b && a <= c ) minNumber = a;
else if( b <= c && b <= a) minNumber = b;
else minNumber = c;

console.log(minNumber)