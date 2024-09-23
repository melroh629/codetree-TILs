const fs = require("fs");
let array = fs.readFileSync(0).toString().split(" ");
console.log(array.reverse().join(''))