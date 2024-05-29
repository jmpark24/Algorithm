let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let testCases = Number(input[0]);
let numbers = input[1].split("").map(Number);

let sum = 0;

for (let i = 0; i < testCases; i++) {
  sum += numbers[i];
}
console.log(sum);