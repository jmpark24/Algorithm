const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n'); // 여러 줄에 걸쳐 입력을 받았기에 \n 으로 쪼개야 함.

let count = 0;
const arr = input[1].split(' ');
const result = input[2];

arr.map((v) => {
  if (v === result) {
    count++;
  }
});
console.log(count);
