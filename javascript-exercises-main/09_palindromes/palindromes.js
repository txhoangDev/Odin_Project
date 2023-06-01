const palindromes = function (string) {
    let arr = string.toLowerCase().replace(/\s/g,'').replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g, '');
    let split = arr.split('').reverse();
    let s = arr.split('');
    for (i = 0; i < split.length; i++) {
        if (split[i] !== s[i]) {
            return false;
        }
    } 
    return true;
}
// Do not edit below this line
module.exports = palindromes;
