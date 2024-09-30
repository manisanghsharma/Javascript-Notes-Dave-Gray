//Math.PI - returns pi
console.log(Math.PI);

//Math.trunc() - removes decimals
console.log(Math.trunc(Math.PI));

//Math.round() - round off
console.log(Math.round(Math.PI));

//Math.ceil() - round up
console.log(Math.ceil(Math.PI));

//Math.floor() - round down
console.log(Math.floor(2.99));

//Math.pow(a, b) - returns a to the power of b
console.log(Math.pow(2, 6));

//Math.min() - returns minimum value
console.log(Math.min(2, 6, 1, 0.2));

//Math.max() - returns maximum value
console.log(Math.max(2, 6, 1, 0.2));

//Math.random() - returns a random value from 0 to 1, Excluding 1
console.log(Math.random());
console.log(Math.random());

//Generating a random number from 1 to 100

console.log(Math.floor(Math.random()*100)+1);

//Note: Always use floor + 1, not ceil, as random has a small chance of generating zero
