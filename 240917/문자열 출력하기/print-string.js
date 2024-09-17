const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
input = Number(input);

let result = '';
for(let i=1; i<=input; i++){
    result +=`LeebrosCode\n`
}

console.log(result)