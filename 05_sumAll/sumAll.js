const sumAll = function() {
    args=Array.from(arguments)
    sum=0;
    for(val of args){
        if(typeof(val)!=="number" || val<0)
        return "ERROR"
    }
    rangeStart=args[0]
    rangeEnd=args[2]
    if(rangeStart>rangeEnd){
        temp=rangeStart
        rangeStart=rangeEnd
        rangeEnd=temp
    }
    

};

// Do not edit below this line
module.exports = sumAll;
