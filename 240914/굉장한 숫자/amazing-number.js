const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().split(" "));

// n이 홀수이면서 3의 배수
// n이 짝수이면서 5의 배수
// 위 두 개 중 하나만 만족하면 됨

if((input % 2 ===1 && input % 3 === 0) || (input % 2 === 0 && input % 5 === 0)) console.log('true')
else console.log('false')