var digitalRoot = function (integer) {

  if (integer < 10) {
    return integer;
  }

  var result = 0;
  var arrayOfInts = integer.toString().split('').map(function (value) {
    return parseInt(value);
  });
  
  arrayOfInts.forEach(function (number) {
    result += number;
  });

  return digitalRoot(result);
};

