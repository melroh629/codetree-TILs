const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let num1 = Number(input[0])
let num2 = Number(input[1])


const getSum = (a,b) => {
    let first = a + b;
    let second = first + b;
    console.log(`${first} ${second}`)
}

getSum(num1, num2)