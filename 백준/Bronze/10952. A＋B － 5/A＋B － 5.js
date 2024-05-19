const input = require('fs').readFileSync('dev/stdin').toString().split('\n'); // 여러 줄에 걸쳐 입력을 받았기에 \n 으로 쪼개야 함.

for (let i = 0; i < parseInt(input.length); i++) {
  let tmp = input[i].split(' ');
  if (tmp[0] === '0' && tmp[1] === '0') break;
  console.log(parseInt(tmp[0]) + parseInt(tmp[1]));
}