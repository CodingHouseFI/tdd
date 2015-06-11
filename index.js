var doubler = function(a, b) {
  var first = a * 1;
  var second = b * 1;
  return b * 2 + a * 2;
}

console.assert(doubler(4,2) === 12);
console.assert(doubler(1,3) === 8);
console.assert(doubler(-1,3) === 4);
