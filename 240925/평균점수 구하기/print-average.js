const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const getAverage = array => {
    let sum = array.reduce((acc, curr) => acc+curr,0);
    let average = (sum / array.length).toFixed(1);
    console.log(average)
}

getAverage(input);