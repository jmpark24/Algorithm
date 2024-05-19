const input = require('fs').readFileSync('dev/stdin').toString().split('\n'); // 여러 줄에 걸쳐 입력을 받았기에 \n 으로 쪼개야 함.

let answer = '';
for (let i = 1; i <= input[0]; i++) {
  let tmp = input[i].split(' ');
  answer += parseInt(tmp[0]) + parseInt(tmp[1]) + '\n';
}

console.log(answer);
