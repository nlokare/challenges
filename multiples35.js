var multiples = function (max) {
  var sum = 0;
  for (var i = 0; i < max; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      sum = sum + i;
    }
  }
  return sum;
};
