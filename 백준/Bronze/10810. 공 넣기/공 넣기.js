const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n'); // 여러 줄에 걸쳐 입력을 받았기에 \n 으로 쪼개야 함.

const [N, M] = input[0].split(' ').map(Number);

let arr = Array(N).fill(0);
for (let i = 1; i <= M; i++) {
  let [start, end, number] = input[i].split(' ').map(Number);
  let newArr = Array(end - start + 1).fill(number);
  arr.splice(start - 1, end - start + 1, ...newArr);
}
console.log(...arr);