const reverseString = function(string) {
    let sArr = string.split('');
    sArr.reverse();
    let result = "";
    sArr.forEach((letter) => {
        result = result.concat(letter);
    });
    return result;
};

// Do not edit below this line
module.exports = reverseString;
