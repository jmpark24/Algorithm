const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n'); // 여러 줄에 걸쳐 입력을 받았기에 \n 으로 쪼개야 함.

const arr = input[1].split(' ').map(Number);

const min = Math.min(...arr);
const max = Math.max(...arr);

console.log(min, max);
