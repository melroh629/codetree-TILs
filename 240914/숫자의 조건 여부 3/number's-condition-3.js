const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().split(" "));

if(input % 13 === 0 || input % 19 === 0) console.log('True')
else console.log('False')