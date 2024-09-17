const fs = require("fs");
let input = Number(fs.readFileSync(0).toString());
let str = "";



for (let k=1; k<=2; k++){
    for(let i=1; i<=input; i++){
        str=""
        for(let j=1; j<=input; j++){
            str+="*";
        }
        console.log(str);
    }
    console.log('')
}