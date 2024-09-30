//2 types - session storage - deleted when refreshed 
//local storage - persists even when we close and open the document again

const myObj = {
    name: "Manisangh",
    age: 19,
    hobbies: ["eat", "sleep", "code"],
    logName: function(){
        console.log(this.name);
    }
}
const myArr = ["Radha", "Krishna", "Balram"];

//Storing object in session storage
sessionStorage.setItem("valueInSession", myObj);
let getValue = sessionStorage.getItem("valueInSession");
console.log(getValue); 
//we get value object Object which is a string

sessionStorage.setItem("valueInSession", myArr);
getValue = sessionStorage.getItem("valueInSession");
console.log(getValue); //Radha,Krishna,Balram
console.log(typeof getValue); //string

//Value gets stored in form of string, so its desirable to store the data in form of JSON
sessionStorage.setItem("valueInJSON", JSON.stringify(myObj));
getValue = sessionStorage.getItem("valueInJSON");
console.log(getValue);
//as expected, values get stringified first and then logged, so all the methods inside it vanish

//Now we can parse the JSON to get the original object
getValue = JSON.parse(sessionStorage.getItem("valueInJSON"));
console.log(getValue);

//.length - total number of items in storage
console.log(sessionStorage.length); //3

//.key(m) - indicate items at m position
console.log(sessionStorage.key(0));
console.log(sessionStorage.key(1));
console.log(sessionStorage.key(2));

//remove item from storage - .removeItem
sessionStorage.removeItem("valueInSession"); 
console.log(sessionStorage.length);
console.log(sessionStorage.key(0));
//value gets removed and returns null if called


//Clearing all storage
sessionStorage.clear();


//Local Storage - persists when browser is refreshed - 
localStorage.setItem("localTest", myArr);