const fibonacci = function(num,fib=0) {

    if(num<0 || typeof(num)=="string"){
        return "OOPS"
    }


    if(fib==num){
        return num
    }


    
    console.log(num)
    return +fibonacci(num-1)
    
};

// Do not edit below this line
module.exports = fibonacci;
