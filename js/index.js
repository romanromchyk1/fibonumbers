var n = Number(prompt('Enter n:'));

function fibo(n) {
  var a = 1, b = 1, c;
  for (var i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

document.write(fibo(n));