let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const str = input[0].trim().split(" ");

if (str == "") console.log(0);
else console.log(str.length);
