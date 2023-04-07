const repeatString = function(word, num) {

    if(num<0)
    return "ERROR"

    wordRepeated=''
    for(i=0; i<num; i++)
    wordRepeated+=word

    return wordRepeated

};

// Do not edit below this line
module.exports = repeatString;
