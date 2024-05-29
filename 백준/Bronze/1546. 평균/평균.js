let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let testCases = Number(input[0]);
const points = input[1].split(" ").map(Number);
const max = Math.max(...points);
let newPoints = [];
let summary = 0;
let average = 0;
for (let i = 1; i <= testCases; i++) {
  newPoints.push(points[i-1]/max*100);
}
for (let i = 1; i<= testCases; i++) {
  summary += newPoints[i-1];
}
average = summary/testCases;
console.log(average)