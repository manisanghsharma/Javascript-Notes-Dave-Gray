//JS had an update for the private field recently
//Anything that is static ie fixed, declare it above the constructor

//Private classes are declared above the constuctor with - #name
//Inside the constructor - this.#name
class Pizza{
    crust = "original";
    #sauce = "traditional";
    #size;
    constructor(pizzaSize){
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }

    hereYouGo(){
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza!`);
    }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();

//Private fields cannot be accessed outside the function
console.log(myPizza.sauce); //undefined
// console.log(myPizza.#sauce); //Gives error 

//Public fields can be accessed
console.log(myPizza.crust); //Not recommended
console.log(myPizza.getCrust()); //Recommended


