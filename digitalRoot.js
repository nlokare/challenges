var digitalRoot = function (integer) {

  if (integer < 10) {
    return integer;
  }

  var rootSum = integer.toString().split('')
    .map(function (value) {
      return parseInt(value);
    })
    .reduce(function (a, b) {
      return a + b;
    });
  
  return digitalRoot(rootSum);
};


