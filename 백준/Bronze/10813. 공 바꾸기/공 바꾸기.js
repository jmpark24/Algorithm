const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n'); // 여러 줄에 걸쳐 입력을 받았기에 \n 으로 쪼개야 함.

const [N, M] = input[0].split(' ').map(Number);

let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}

let trade = [];
for (let i = 1; i <= M; i++) {
  trade.push(input[i].split(' ').map(Number));
}

let tmp;

for (let i = 1; i <= M; i++) {
  tmp = arr[trade[i - 1][0] - 1];
  arr[trade[i - 1][0] - 1] = arr[trade[i - 1][1] - 1];
  arr[trade[i - 1][1] - 1] = tmp;
}
console.log(...arr);