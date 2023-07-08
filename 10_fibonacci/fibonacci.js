const fibonacci = function(n) {
    //start from 1 - go to the nth element
    // fibonacci(1) = 1
    // fibonacci(2) = 1
    // fibonacci(3) = fibonacci(2) + fibonacci(1) = 1 + 1 = 2
    // fibonacci(4) = fibonacci(3) + fibonacci(2) = 1 + 2 = 3
    // fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
    if (n <= 0) return 'OOPS'
    else if (n <= 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2)
};

// Do not edit below this line
module.exports = fibonacci;