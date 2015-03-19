var targetSum = function (x, inputArray) {
  var sort = inputArray.sort(function (a, b) {
    return a - b;
  });
  var i = 0;
  var j = sort.length - 1;  
  while (i !== j) {
    if ((sort[i] + sort[j]) === x) {
      return true;
    } else if ((sort[i] + sort[j]) < x) {
      i++;
    } else if ((sort[i] + sort[j]) > x) {
      j--;
    }
  }
  return false;
};
