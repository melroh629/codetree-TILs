const fs = require("fs");
let n = fs.readFileSync(0).toString();
n = Number(n);

let str="";
for(let i=0; i<n; i++){
    str="";
    for(let j=0; j<i+1; j++){
        str+="* ";
    }
    console.log(str);
}