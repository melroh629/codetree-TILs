const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let result = input < 5 ? console.log(`tiny\n${input*input}`) : console.log(`${input*input}`);