let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ");

let hour = Number(input[0]);
let min = Number(input[1]);

min = min - 45;
if (min < 0) {
  hour -= 1;
  min = 60 + min;
  if (hour < 0) {
    hour = 23;
  }
}
console.log(hour, min);