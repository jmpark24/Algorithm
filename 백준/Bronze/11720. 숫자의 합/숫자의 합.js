const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const count = parseInt(input[0]);

const arr = input[1].split('').map(Number);

let sum = 0;
for (let i = 0; i < count; i++) {
  sum += arr[i];
}
console.log(sum);