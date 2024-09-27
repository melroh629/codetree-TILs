const fs = require("fs");
let number = fs.readFileSync(0).toString().trim();
number = Number(number)

let array = Array(10);
// array[0] = number;

for(let i=1; i<=10; i++){
    array[i-1] =  number * i;
}
let str = "";
let count = 0;
for(let j=0; j<array.length; j++){
    if(array[j] % 5 === 0){
        str += `${array[j]} `;
        count++;
    }
    if(count ===2){
        break;
    }
}

console.log(str);