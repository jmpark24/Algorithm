let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  let [R, S] = input[i].split(" ");
  let splitS = S.split("");

  let results = "";
  for (let j = 1; j <= splitS.length; j++) {
    for (let k = 0; k < R; k++) {
      results += splitS[j - 1];
    }
  }
  console.log(results);
}