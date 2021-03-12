// Current temperature in Kelvin.
const kelvin = 0;
// Convert Kelvin to Celsius.
const celsius = kelvin - 273;
// Convert Celsius to Fahrenheit.
let fahrenheit = celsius * (9/5) + 32;
// Round down Fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees of Fahrenheit.`);

// Convert Celsius to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} Newton.`);
