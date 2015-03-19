var substringTest = function (x, y) {
  var inputString = y.split(x);
  if (inputString.length > 1) {
    return true;
  } else {
    return false;
  }
};
