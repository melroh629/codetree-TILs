const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let num1 = Number(input[0])
let num2 = Number(input[1])

let bmi = Math.floor(((10000*num2) / (num1*num1)));
if(bmi >= 25) {
    console.log(`${bmi}\nObesity`)
} else {
    console.log(bmi);
}