//square and return each digit of the parameter number
function squareDigits(num) {
  var string = num.toString();
  var results = [];
  for (var i = 0; i < string.length; i++) {
    results[i] = string[i] * string[i];
  }
  return Number(results.join(""));
}

console.log(squareDigits(515));
