const add = function(num1,num2) {
  return num1+num2
	
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function() {
	vals=Array.from(arguments[0]).map(x=>parseInt(x,10))
  console.log(vals)
  summation=0;
  for(val of vals){
    summation+=val;
  }
  return summation
};

const multiply = function() {
  vals=Array.from(arguments[0]).map(x=>parseInt(x,10))
  product=0;
  if(vals.length>0)
  product=1;
  for(val of vals){
    product*=val
  }
  return product
};

const power = function(num1,  num2) {
	return num1**num2
};

const factorial = function(num) {
	if(num===0)
  return 1;
  if(num===1)
  return 1

  return num*factorial(num-1)
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
