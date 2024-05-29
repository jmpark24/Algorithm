let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

let result = "";
for (let i = 1; i <= input[0]; i++) {
  for (let j = 1; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);
