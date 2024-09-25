const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let array = Array(10);
array[0] = input[0];
array[1] = input[1];

for(let i=2; i<10; i++){
    array[i] = (array[i-2] + array[i-1]) % 10;
}

console.log(array.join(" "))