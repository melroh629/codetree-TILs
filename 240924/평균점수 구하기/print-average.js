const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ").map(Number);


let sum = input.reduce((acc, curr) => acc+curr,0);
let average = (sum / input.length).toFixed(1);
console.log(average)