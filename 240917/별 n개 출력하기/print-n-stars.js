const fs = require("fs");
let input =fs.readFileSync(0).toString().split(" ");
input = Number(input);

let result = '';
let i = 1;
while(i <= input) {
    result += `*\n`;
    i++;
}

console.log(result)