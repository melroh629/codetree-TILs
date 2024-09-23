const fs = require("fs");
let n = fs.readFileSync(0).toString();
n = Number(n);

let str="";


for(let i=0; i < n; i++) {
    str = "";
    for (let k=0; k < n-i; k++) {
        for (let j=0; j<n-i; j++) {
            str += "*";
        }
        str +=' ';
    }
    
    console.log(str);
}