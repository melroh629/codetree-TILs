const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

let person1 = input[0].split(' ');
let person2 = input[1].split(' ');

let [age1, gender1] = person1;
age1 = Number(age1);
let [age2, gender2] = person2;
age2= Number(age2);

if((age1 >= 19 || age2 >= 19) && (gender1 === 'M' || gender2 === 'M')) console.log(1)
else console.log(0)