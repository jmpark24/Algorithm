let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const a = parseInt(input[0]);

if (90 <= a && a <= 100) console.log("A");
else if (80 <= a && a <= 89) console.log("B");
else if (70 <= a && a <= 79) console.log("C");
else if (60 <= a && a <= 69) console.log("D");
else console.log("F");
