//Objects are key value pairs in curly braces

const myObj = {
    name: 'Manisangh'
}; //end by semicolon
console.log(myObj);
console.log(myObj.name); 


//Left: Keys | Right: Values
const anotherObj = {
    alive: true, //separated by ,
    age: 19,
    hobbies: ['Reading', 'Chess', 'Bhakti'],
    beverage: {
        morning: 'Coffee',
        evening: 'Tea'
    }, //nested object

    action: function(){
        return "Hello World";
    },  //Functions

    action2: function(){
        return `Time for ${this.beverage.evening}!`;
    } //Accessing another key value pair within objectusing ${this.}
};

console.log(anotherObj.beverage.morning);

//We can also access the values by [" "]
console.log(anotherObj["alive"]); 

//Functions
console.log(anotherObj.action());

console.log(anotherObj.action2());


//Inheritance - Inheriting properties of another object

const vehicle = {
    wheels: 4,
    engine: function(){
        return "Vrooooom!";
    }
}

//Creating a new object car which will inherit the properties vehicle

const car = Object.create(vehicle);
car.doors = 4; //Assigning key value pair to car

console.log(car);
//If we log the value of car, we will see only doors, but interstingly, as car has inherited vehicle object, it has the same properties of vehicle as well

//If we call the engine function here, we will see vroooom!
console.log(car.engine());

//We can change the properties of engine for car
car.engine = function(){
    return "Whooooosh!";
}

console.log(car.engine());

//Similiary we can create another object tesla which will inherit the properties of vehicle as well as car

const tesla = Object.create(car);
tesla.engine = function(){
    return "Shhhhh!";
}
console.log(tesla.engine());

//Acessing key values pairs

const band = {
    vocals: "Ravindra Jain",
    guitar: "Anup Jalota",
    bass: "Dj",
    drums: "Manisangh"
};

//Logging Keys
console.log(Object.keys(band));

//Logging Values
console.log(Object.values(band));

//Loop for accessing values in objects - job - job here acts as keys

for(let job in band){
    console.log(band[job]);
}; //It will iterate value of each key in band object one by one

//To log keys, we can simply log the value of job

for(let job in band){
    console.log(`On ${job}, it's ${band[job]}!`);
    // console.log("On " + job + " it's " + band[job] + "!"); 
} //Using template literal `` is way better than using +


//Deleting properties - delete
delete band.drums;  

//Checking if a property exists in an Object - objname.hasOwnProperty("name") - returns true or false based on whether value exists or not

console.log(band.hasOwnProperty("drums")); //Returns false

//Destructing Objects
//assign the value of key guitar to a new varibale - myVariable

const {guitar: myVariable} = band;
console.log(myVariable);


//We can assign multiple values as well
const {vocals: newVar, bass: newVar2} = band;
console.log(newVar);
console.log(newVar2);


//Destructing keys and naming the variables same as keys
const {vocals, guitar, bass} = band;
console.log(guitar);
console.log(vocals);

//Creating a function which access the vocals key
function sings({vocals}){
    return `${vocals} sings!`;
};

console.log(sings(band));

//band object is passed to sings - it will destructure - and look for the vocals key - and return it's value to the function
