let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

let result = "";

result += input[0] + input[1] + "\n";
result += input[0] - input[1] + "\n";
result += input[0] * input[1] + "\n";
result += parseInt(input[0] / input[1]) + "\n";
result += input[0] % input[1];

console.log(result);