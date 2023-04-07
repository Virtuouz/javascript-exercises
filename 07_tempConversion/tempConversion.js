const convertToCelsius = function(temper) {
  return Math.round((5/9)*(temper-32)*10)/10
};

const convertToFahrenheit = function(temper) {
  return Math.round(((9/5)*(temper)+32)*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
