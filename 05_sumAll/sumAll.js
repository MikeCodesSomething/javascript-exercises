const sumAll = function(number1, number2) {
    if (typeof number1 != 'number' || typeof number2 != 'number')  return 'ERROR';
    if (number1 < 0 || number2 < 0) return 'ERROR';
    startNumber = Math.min(number1,number2);
    endNumber = Math.max(number1,number2);
    sum = 0
    for (let i = startNumber; i <= endNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
