const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().split(" "));

if(input >= 80) {
    console.log('pass')
}else {
    let remain = 80 - input;
    console.log(`${remain} more score`)
}