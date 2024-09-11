const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let num1 = Number(input[0])
let num2 = Number(input[1])

const getAverage = (a,b) => {
    console.log((a+b), ((a+b) / 2).toFixed(1))
}
getAverage(num1,num2)