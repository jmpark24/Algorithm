let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ");

let first = input[0].split("");
let second = input[1].split("");
let join1 = first.reverse().join("");
let join2 = second.reverse().join("");

console.log(Math.max(Number(join1), Number(join2)));
