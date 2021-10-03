// Current temperature forecast in Kelvin
const kelvin = 293;

// Converts Kelvin to Celsius
const celsius = kelvin - 273;

// Converts Celsius to Fahrenheit and rounds down the result
const fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// --EXTRA PRACTICE--

const newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton.`);
