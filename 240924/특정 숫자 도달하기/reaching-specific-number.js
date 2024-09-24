const fs = require("fs");
let array = fs.readFileSync(0).toString().split(" ");
array = array.map(Number);

let sum, average;
let newArray;
let item, index;


const getItem = array => {
    index = array.findIndex(item => item >= 250);
    item = array[index];
    newArray = array.slice(0,index)
    return newArray;
}

getItem(array);



if(newArray.length !== 0) {
    sum = newArray.reduce((acc, curr) => acc + curr,0)
    average = (sum / newArray.length).toFixed(1);
    console.log(sum, average);
} else {
    sum = array.reduce((acc, curr) => acc + curr,0)
    average = (sum / array.length).toFixed(1);
    console.log(sum, average);
}