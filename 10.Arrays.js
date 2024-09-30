//Arrays
const myArray = [];

//Arrays in JS can hold different types of data
myArray[0] = 'Manisangh';
myArray[1] = 5;
myArray[2] = false;

//Display array
console.log(myArray);

//Length of an array
console.log(myArray.length);

//Last element in an array
console.log(myArray[myArray.length-1]);

//Adding an element at last - push()
const pushTest = myArray.push("Radharani");
console.log(pushTest);
console.log(myArray);

//Remove an element from last of the array- pop()
const popTest = myArray.pop(); //returns last item
console.log(popTest);

console.log(myArray);

//Add an element at first position - unshift() - returns first item

const unshiftTest = myArray.unshift(42);
console.log(unshiftTest); //will return the new length of array
console.log(myArray);

//removng items from front
const shiftTest = myArray.shift(); //removes 1st item and shifts the array
console.log(myArray);
console.log(shiftTest); //returns first item

myArray.push("Krishna");
console.log(myArray);

//Deleting elements

//1. Using delete - not recommended
delete myArray[1];
console.log(myArray); //results in empty item of type undefined

//2. Using splice
const testArray = [1,2,3,4,5,6,7,false,'Govinda','Radhey'];
testArray.splice(1,2); //start at 1 index (including 1), delete 2 element
console.log(testArray);

//Replacing with splice
testArray.splice(0,0,42); //unshift 
console.log(testArray);

testArray.splice(2,0,42,43); //adds 42,43 at 2nd index
console.log(testArray);

//Reversing
testArray.reverse();
console.log(testArray);

//Split & Join
//Join - Joins all elements separated by , and assigns it to a string

const arr1 = ['A','B','C','D','E','F'];
const str1 = arr1.join();
console.log(str1);

//Split - Splits the array and assigns the elements to a new array

const arr2 = str1.split(","); //, is the separator
console.log(arr2);

//arr1.concat(arr2) - returns array with elements of arr1 + arr2;

const arrA = ['A', 'B', 'C'];
const arrB = ['D', 'E', 'F'];
const arrC = arrB.concat(arrA);
console.log(arrC);

//using the spread operator - ...
//works the same way as concat

const arrD = [...arrA, ...arrB];
console.log(arrD);

//If we dont use the spread operator, we will end with a nested array

const arrE = [arrA, arrB];
console.log(arrE);

//Nested Arrays - used for sequential arrangement of arrays
const equipShelfA = ['basketball', 'football', 'vollyball'];
const equipShelfB = ['cricket', 'tennis', 'golf'];

const clothesShelfA = ['shirts', 'tshirts', 'jerseys'];
const clothesShelfB = ['lowers', 'pajamas', 'half-pants'];

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

const equipStore = [equipShelfA, equipShelfB];
const clothStore = [clothesShelfA, clothesShelfB];

//Elements in nested arrays
console.log(equipStore[0][1]);
console.log(clothStore[1][0]);

//We can even nest this nested array in another nested array
const sportsStore = [equipStore, clothStore];
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);

