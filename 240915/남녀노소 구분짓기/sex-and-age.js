const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

let gender = Number(input[0]);
let age = Number(input[1]);



if(gender === 0) {
    if(age < 19) {
        console.log('BOY')
    } else {
        console.log('MAN')
    }
} else if (gender === 1) {
    if(age >= 19) {
        console.log('WOMAN');
    } else {
        console.log('GIRL')
    }
}