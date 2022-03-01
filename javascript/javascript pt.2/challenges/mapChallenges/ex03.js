// extra by me: fahrenheit to Celsius converter

console.log();

let temperatureInCelsius = [40, 30, 25, 37, 41, 38, 32, 26, 23, 19, 16, 13, 9];
console.log(temperatureInCelsius);
console.log();

const temperatureInFahrenheit = temperatureInCelsius.map(temperatureInC => {
    let temperatureInF = temperatureInC * 1.8 + 32;
    return parseFloat(temperatureInF.toFixed(1));
});
console.log(temperatureInFahrenheit);
console.log();
