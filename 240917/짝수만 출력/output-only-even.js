const fs = require("fs");
let input =fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let i = a;
let result = '';

while(i <= b) {
    if(i % 2 === 0) {
        result += `${i} `;
    }
    i++;
}
console.log(result)