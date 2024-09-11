const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let num1 = Number(input[0])
let num2 = Number(input[1])

const getBMI=(h,w) => {
    let bmi = Math.floor(((10000*w) / (h*h)));
    if(bmi >= 25) {
        console.log(`${bmi}\nObesity`)
    } else {
        console.og(bmi);
    }
    
}

getBMI(num1,num2)