const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

let studentA = input[0].split(' ');
let aMath = Number(studentA[0])
let aEng = Number(studentA[1])
let studentB = input[1].split(' ');
let bMath = Number(studentB[0])
let bEng = Number(studentB[1])

// 수학이 더 여려웠음
// A,B가 서로의 점수로 우위를 나눔
// 수학점수가 높다면 더 높은 학생의 이름을 출력
// 수학점수가 같다면 영어 점수가 더 높은 학생 이름 출력

// A의 수학점수랑 B수학점수 비교
// 높은 학생 이름 출력
// A, B 수학점수가 같다면
// A의 영어점수, B수학점수 비교

if((aMath < bMath) || (aMath === bMath && aEng < bEng)) console.log('B')
else console.log('A');

// if(aMath === bE && aEng < bEng) console.log('B');
// else console.log('A');