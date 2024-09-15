const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

input = Number(input);


if(input % 4 === 0) {
    if((input % 100 === 0) && (input % 400 !==0)) console.log('false')
    else console.log('true')
} else console.log('false')