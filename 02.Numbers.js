//A number is shown as purple, string as white in browser console

//Automatic type declaration is present

const myNum = 42;
const myStr = "42.123abc";
console.log(myNum);

//Float
const myFloat = 42.00;
const myFloat2 = 42.01; 
console.log(myFloat);//useless zeroes are removed
console.log(myFloat2);

console.log(myNum===myFloat); //true as zeroes are removed
console.log(myNum===myFloat2); //false

//Number() - STOI
console.log(Number("64"));
console.log(Number("Manisangh")); //NaN - Not a Number

//Number.isInteger() - Is an integer or not
console.log(Number.isInteger(myStr));

//parseFloat() - Conversion to float
console.log(parseFloat(myStr)); //removes abc

//parseInt() - Conversion to integer
console.log(parseInt(myFloat2));

//toString() - Conversion to string
console.log(toString(myFloat2));

//isNaN() - Not a Number?
console.log(isNaN("Manisangh")); //Yes, it is not a number

//Chaining - Multiple methods can be chained together to get the desired output

console.log(typeof Number.parseFloat(myStr));

//toFixed - fix the no of numbers after decimal
console.log(parseFloat(myStr).toFixed(2));

