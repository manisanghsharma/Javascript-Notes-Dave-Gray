//Higher Order Functions

// A higher order function does one of the following-
// 1. Takes one or more function as the arguement
// 2. Returns a function as a result

//forEach() - executes a callback function on each of the elements in an array in order. - like for loop

const myArr = [4, 12, 13, 3, 45];

myArr.forEach(a => {
    console.log(`The number is ${a}`);
});


//filter() - The .filter() method executes a callback function on each element in an array. The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true.

const filteredArray = myArr.filter(n => {
   return n>10;
})

console.log(filteredArray);

//map() - The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function. The original array does not get altered, and the returned array may contain different elements than the original array.


const mappedArray = myArr.map(n => {
    return 'Your number is ' + n;
})

console.log(mappedArray);

//reduce()
// The .reduce() method iterates through an array and returns a single value. It takes a callback function with two parameters (accumulator, currentValue) as arguments. On each iteration, accumulator is the value returned by the last iteration, and the currentValue is the current element.

const summedArray = myArr.reduce((n, m) => {
    return n + m;
}) 

console.log(`The sum is ${summedArray}`);