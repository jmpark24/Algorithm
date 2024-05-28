let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const n2 = input[1].split('');

console.log(parseInt(input[0] * n2[2]));
console.log(parseInt(input[0] * n2[1]));
console.log(parseInt(input[0] * n2[0]));
console.log(parseInt(input[0] * input[1]));
