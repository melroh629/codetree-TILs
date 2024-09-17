const fs = require("fs");
let input = fs.readFileSync(0).toString();
input = Number(input);


let str="";
for(let i=input; i>0; i--){
    str="";
    for(let j=0; j<i; j++){
        str+="* "
    }
    console.log(str);
}