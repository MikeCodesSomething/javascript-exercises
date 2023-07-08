const convertToCelsius = function(degreesFahrenheit) {
  let degreesCelsius = (degreesFahrenheit - 32) * 5/9;
  let roundedDegrees = +degreesCelsius.toFixed(1);
  return roundedDegrees

};

const convertToFahrenheit = function(degreesCelsius) {
  let degreesFahrenheit = (degreesCelsius * 9/5 ) +32;
  let roundedDegrees = +degreesFahrenheit.toFixed(1);
  return roundedDegrees
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
