const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(numbers) {
  let total = 0
  for (number of numbers) {
    total += Number(number)
  }
  return total
	
};

const multiply = function() {
  let total = arguments[0]
  for (i = 1; i < arguments.length; i++) {
    total *= arguments[i]
  }
  return total
};

const power = function(base,power) {
	return base ** power
};

const factorial = function(number) {
	let total = 1
  for (i = number; i > 1; i--) {
    total *= i
  }
  return total
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
