const fs = require("fs");
let input =fs.readFileSync(0).toString();
input = Number(input);
let str = "";
for(let i=1; i<=input; i++){
    str = "";
    for(let j=1; j<=input; j++){
        str += `*`;
    }
    console.log(str)
}