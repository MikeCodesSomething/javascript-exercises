const palindromes = function (string) {
    //make lower case and remove all spaces and punctuation
    let modifiedString = string.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    return reverseString(modifiedString) === modifiedString
};

const reverseString = function(string) {
    let reversed = ''
    for (i = string.length; i > 0; i--) {
        reversed += string[i-1]
    }
    return reversed
};

// Do not edit below this line
module.exports = palindromes;
