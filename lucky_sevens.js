
let num1 = Math.floor((Math.random() * 5) + 1);
let num2 = Math.floor((Math.random() * 5) + 1);
let num3 = Math.floor((Math.random() * 5) + 1);
let lucky = [num1, num2, num3];

function luckySevens(arr) {
let sum1 = arr.reduce(function(a, b) {
    return a + b;
}, 0);
  return arr;
}
console.log(arr);
console.log(sum1);
