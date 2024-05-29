let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let testCases = Number(input[0]);
for (let i = 1; i <= testCases; i++) {
  let data = input[i].split(" ").map(Number);
  let n = data[0];
  let summary = 0;
  for (let j = 1; j <= n; j++) {
    summary += data[j];
  }
  let average = summary / n;

  let cnt = 0;
  for (let j = 1; j <= n; j++) {
    if (data[j] > average) {
      cnt++;
    }
  }

  console.log(`${((cnt / n) * 100).toFixed(3)}%`);
}
