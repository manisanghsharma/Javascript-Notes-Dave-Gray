//Puts an alert on the screen
alert("Hello World");

//confirm - 2 options - Ok (True) - Cancel(False)
confirm("Ok = True\nCancel = False");

//returns value true/false
let test = confirm("Ok = True\nCancel = False");
console.log(test);

//prompt - user input
let myname = prompt("Enter Your Name");
console.log(myname);

//clicking CANCEL without entering any name returns the value - null
//We can check for null using the Nullish coalescing operator (??)

console.log(myname ?? "You didn't enter a name");
// if name is null - returns 2nd value - else returns name

//If ok is clicked without entering any name - a string of zero length is returned
if(myname){
    console.log("Your name is " + myname);
}

else{
    console.log("You did not enter a name");
}

//If a user enters useless spaces after the name, it can be removed by the trim() function
console.log(myname.length);
console.log(myname.trim().length);



