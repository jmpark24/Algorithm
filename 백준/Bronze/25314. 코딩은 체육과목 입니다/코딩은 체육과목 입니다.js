const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const n = parseInt(input[0]) / 4;

const str1 = 'int';
const str2 = 'long ';
let result = '';
for (let i = 1; i <= n; i++) {
  result = result.concat(str2);
}
console.log(result.concat(str1));
