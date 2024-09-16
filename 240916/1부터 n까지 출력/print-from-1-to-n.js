const fs = require("fs");
let input = Number(fs.readFileSync(0).toString());

let total = '';


for(let i = 1; i<= input; i++) {
    total += `${i} `
}
console.log(total)