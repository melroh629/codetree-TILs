const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let num1 =  Number(input[0]);
let num2 =  Number(input[1]);

const getArea = (a,b) => {
    let width = a += 8;
    let height = b *= 3;
    let area = width * height;

    console.log(`${width}\n${height}\n${area}`)
}

getArea(num1,num2)