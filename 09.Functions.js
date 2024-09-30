//functions
//Get user name from email
function getUserName(email){
    return email.slice(0, email.indexOf("@"));
}

let email = "manisanghsharma@gmail.com";
console.log(getUserName(email));

//make words proper
function toProperCase (myName){
    return myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase();
}

let myName = "dAve";
console.log(toProperCase(myName));