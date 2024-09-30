//Write a code which will return a random letter from your name

//My solution
const str = "Manisangh"
const len = str.length;
let randletter = Math.ceil(Math.random()*len)-1;
console.log(randletter);
console.log(str.charAt(randletter));

//efficient Solution
const anyName = "Manisangh";
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));


//Floor(random * 5) + 1 --> random number from 1 to 5
//Floor(random * 5) --> random number from 0 to 4

