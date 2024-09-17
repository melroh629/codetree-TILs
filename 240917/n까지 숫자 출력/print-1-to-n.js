const fs = require("fs");
let input =fs.readFileSync(0).toString().split(" ");
input = Number(input);

let i = 1;
let result = '';

while( i <= input) {
    result += `${i} `;
    i++;
}

console.log(result);