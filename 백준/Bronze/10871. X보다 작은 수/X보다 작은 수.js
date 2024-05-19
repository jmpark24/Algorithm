const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n'); // 여러 줄에 걸쳐 입력을 받았기에 \n 으로 쪼개야 함.

const [count, key] = input[0].split(' ');

const arr = input[1].split(' ');

let result = '';
arr.map((v) => {
  if (parseInt(v) < parseInt(key)) {
    result += v + ' ';
  }
});

console.log(result);
