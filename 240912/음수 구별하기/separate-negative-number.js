const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");


if(input < 0) {
    console.log(`${input}\nminus`)
} else {
    console.log(Number(input))
}