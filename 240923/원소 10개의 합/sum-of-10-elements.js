const fs = require("fs");
let array = fs.readFileSync(0).toString().split(" ");
array = array.map(Number)
let answer = array.reduce((acc, curr) => acc+curr,0)
console.log(answer);