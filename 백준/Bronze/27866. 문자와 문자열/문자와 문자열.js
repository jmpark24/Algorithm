const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n'); // 여러 줄에 걸쳐 입력을 받았기에 \n 으로 쪼개야 함.

const S = input[0];
const i = parseInt(input[1]);

console.log(S[i - 1]);
