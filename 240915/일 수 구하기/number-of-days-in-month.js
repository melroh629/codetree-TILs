const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
input = Number(input);

if(input !== 2) {
    if((input <= 7 && input % 2 !== 0) || (input > 7 && input % 2 === 0)) {
        console.log(31);
    } else console.log(30);
} else console.log(28)