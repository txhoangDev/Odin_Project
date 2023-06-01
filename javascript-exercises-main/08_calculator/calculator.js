const add = function(num1, num2) {
	if (typeof(num1) === 'number' && typeof(num2) === 'number') {
    return num1 + num2;
  }
  return 'ERROR';
};

const subtract = function(num1, num2) {
	if (typeof(num1) === 'number' && typeof(num2) === 'number') {
    return num1 - num2;
  }
  return 'ERROR';
};

const sum = function(array) {
	let result = 0;
  for (i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

const multiply = function(nums) {
  let result = 1;
  for (i = 0; i < nums.length; i++) {
    result *= nums[i]
  }
  if (nums.length === 0) {
    return 0;
  }
  return result;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  } else {
    let result = 1;
    for (i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
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
