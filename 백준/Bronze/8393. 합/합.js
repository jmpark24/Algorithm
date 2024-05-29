const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const num = Number(input[0]);

let sum = 0;
for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log(sum);
