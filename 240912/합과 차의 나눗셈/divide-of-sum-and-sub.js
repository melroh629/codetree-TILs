const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let num1 = Number(input[0])
let num2 = Number(input[1])

const getNumber = (a,b) => {
    let sum = a+b;
    let sub = a -b;
    let result = (sum/sub).toFixed(2)
    console.log(result)
}
getNumber(num1, num2);