const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = input[0];
let array = input[1].split(' ').map(Number);



let even =[];
array.forEach(item => {
    if(item % 2 === 0 ){
        even.push(item)
    }
    return even;
})

console.log(even.reverse().join(" "))