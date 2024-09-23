const fs = require("fs");
let n = fs.readFileSync(0).toString();
n = Number(n);
let str = "";
for(let i=0; i<n; i++) {
    str = "";
    for(let j=1; j<=(2*i)+1; j++) {
        str += "*";
    }
    console.log(str)
}