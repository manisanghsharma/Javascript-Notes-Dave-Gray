//print
console.log("Hello World")

//string
const str = "RadhaKrishna";
console.log(str);

//length of string, including spaces
console.log(str.length);
console.log("Hello a test".length);

//charAt - returns value at specified location
console.log(str.charAt(0));

//indexOf - First Occurence
console.log(str.indexOf("aK"));
console.log(str.indexOf("a"));

//lastindexOf - Last Occurence
console.log(str.lastIndexOf("a"));

//slice - Used to slice the string
console.log(str.slice(5)); //5 to end
console.log(str.slice(5, 8)); //5 to 7

//toLowerCase() - lowercase all - Parenthesis required

console.log(str.toLowerCase());

//toUpperCase() - uppercase all - Parenthesis required

console.log(str.toUpperCase());

//includes - if string inside given string, returns true

console.log(str.includes("Krishna"));
console.log(str.includes("Manisangh"));

//split - splits the string at the given input

console.log(str.split("K")); //Will not include K
console.log(str.split("")); //empty quotes will return all characters at separate elements in the array
console.log(str.split(""));
console.log("Beauty lies in the eyes of beholder".split(" ")); //using  " " as input in a sentence will lead to each word being a separate string in the output array

