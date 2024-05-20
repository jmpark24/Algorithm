const input = require('fs').readFileSync('dev/stdin').toString().split('\n'); // 여러 줄에 걸쳐 입력을 받았기에 \n 으로 쪼개야 함.

let output = '';

for (let i = 1; i <= parseInt(input[0]); i++) {
  for (let j = parseInt(input[0]) - 1; j >= i; j--) {
    output += ' ';
  }
  for (let k = 1; k <= i; k++) {
    output += '*';
  }
  output += '\n';
}
console.log(output);
