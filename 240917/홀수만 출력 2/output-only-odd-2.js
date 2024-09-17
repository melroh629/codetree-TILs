const fs = require("fs");
let input =fs.readFileSync(0).toString().split(" ");

let a = Number(input[1]);
let b = Number(input[0]);

let result = '';
for(let i=b; i>=a; i--){
    if(i % 2 === 1) {
        result += `${i} `
    }
}

console.log(result)