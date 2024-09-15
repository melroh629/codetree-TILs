const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let personA = input[0].split(" ");
let personB = input[1].split(" ");
let personC = input[2].split(" ");

let symptomA = personA[0], temperatureA = Number(personA[1]);
let symptomB = personB[0], temperatureB = Number(personB[1]);
let symptomC = personC[0], temperatureC = Number(personC[1]);

if(symptomA === 'Y' && temperatureA >= 37) {
    if((symptomB ==='Y' && temperatureB >= 37) || (symptomC === "Y" && temperatureC >= 37)){
        console.log('E');
    } else {
        console.log('N')
    }
} else {
    if((symptomB === 'Y' && temperatureB >= 37) && (symptomC === "Y" && temperatureC >= 37)) {
        console.log('E');
    } else {
        console.log('N');
    }
}