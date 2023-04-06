const palindromes = function (word) {
    word=word.replace(/[^a-zA-Z]+/g, '')
    word=word.toUpperCase();
    backwards=word.split("").reverse().join("");
    console.log(word)
    console.log(backwards)
    if(word==backwards){
        return true
    }
    return false;
};

palindromes("ZZZZ car, a man, a maracaz.")
// Do not edit below this line
module.exports = palindromes;
