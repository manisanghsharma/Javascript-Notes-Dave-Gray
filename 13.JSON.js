//JSON - JavaScript Object Notation

/*
JSON is used to send and receive data.
JSON is a text format that is completely language independent
It is used to send and recieve data in many languages.
*/

const myObj = {
    names: "Manisangh",
    hobbies: ["eat", "sleep", "code"],
    hello: function(){
        console.log("Hello");
    }
}

console.log(myObj);
console.log(typeof(myObj));

//Sending as JSON - JSON.stringify()
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);

//Converting any object to JSON will loose any methods inside it
//JSON.parse()
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON); //loses hello method

