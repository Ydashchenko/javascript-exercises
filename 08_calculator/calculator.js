const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0)
	
};

const multiply = function(numbers) {
  return numbers.length ? numbers.reduce((total, num) => total * num) : 0
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(n) {
	if (n == 0 || n == 1) {
    return 1
  } else {
    let sum = n
    for (i = n - 1; i > 1;i--) {
      sum *= i
    }
    return sum
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
