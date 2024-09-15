const fs = require("fs");
let input = fs.readFileSync(0).toString();
input = Number(input);

let result = '';
for(let i = input; i <= 100; i++) {
    result += (i+' ');
    
}
console.log(result);