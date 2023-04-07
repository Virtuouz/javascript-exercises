const removeFromArray = function() {
    args = Array.from(arguments)
    arrValues=args[0]
    valsToRem=args.slice(1)

    for(val of valsToRem){
        index=arrValues.indexOf(val)
        if (arrValues[index]===val)
            arrValues.splice(index,1)
    }
    return arrValues
};

removeFromArray([1, 2, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray;
