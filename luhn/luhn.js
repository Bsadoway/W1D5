function check(number) {
  var total = 0;
  var count = 1;
  var num = number.toString().split("");
  for (var i = num.length - 1; i >= 0; i--) {

    var newNum = Number(num[i]);
    if (count % 2 === 0) {
      var multipliedNum = newNum * 2;

      if (multipliedNum > 9) {
        newNum = multipliedNum % 10 + Math.floor(multipliedNum / 10);
      } else {
        newNum = multipliedNum;
      }
    }
    count++;
    total += newNum;

  }
  return total % 10 === 0;
}

module.exports = check;
