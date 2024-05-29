let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

let result = "";
for (let i = 1; i <= 9; i++) {
  if (i === 9) result += input[0] + " * " + i + " = " + input[0] * i;
  else result += input[0] + " * " + i + " = " + input[0] * i + "\n";
}
console.log(result);
