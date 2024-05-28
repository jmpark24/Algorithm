let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let currentTime = input[0].split(' ');
let hour = parseInt(currentTime[0]);
let min = parseInt(currentTime[1]);
let takeTime = parseInt(input[1]);

min += takeTime;

if (min >= 60) {
  hour += parseInt(min / 60);
  min %= 60;
}
if (hour >= 24) {
  hour %= 24;
}

console.log(hour, min);
