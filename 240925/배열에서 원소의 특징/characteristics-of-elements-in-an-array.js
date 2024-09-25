const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);


let array = [];
for(let i=0; i<input.length; i++){
    if(input[i] % 3 === 0){
        array.push(input[i-1]);
    }
}
console.log(array[0])