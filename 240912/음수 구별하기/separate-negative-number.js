const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");


if(input < 0) {
    console.log(`${input}\nminus`)
} else if(input > 0) {
    console.log(Number(input))
}