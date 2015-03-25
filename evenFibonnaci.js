var fibonacci = function (n) {
  var value;
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(4));
