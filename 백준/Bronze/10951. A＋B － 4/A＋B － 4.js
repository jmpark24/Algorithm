const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n'); // 여러 줄에 걸쳐 입력을 받았기에 \n 으로 쪼개야 함.

for (let i = 0; i < input.length; i++) {
  let [num1, num2] = input[i].split(' ');
  console.log(Number(num1) + Number(num2));
}