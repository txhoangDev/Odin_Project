const sumAll = function(num1, num2) {
    if (typeof(num1) === 'number' && typeof(num2) === 'number' && num1 >= 0 && num2 >= 0) {
        let result = 0;
        let small = num1;
        let large = num2
        if (num1 > num2) {
            small = num2;
            large = num1;
        }
        for (i = small; i <= large; i++){
            result += i;
        }
        return result;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
