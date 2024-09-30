//Classes were introduced in 2015

class Pizza{
    constructor(pizzaType, pizzaSize){
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
        this.toppings = [];

    }

    getCrust() {
        return this.crust;
    }

    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }

    getToppings(){
        return this.toppings;
    }

    setToppings(pizzaTopping){
        this.toppings.push(pizzaTopping);
    }

    //Class can have methods
    bake(){
        return `Baking a ${this.size} ${this.type} ${this.crust} crust pizza!`
    }
}

//Now we can create new object with this class - we will pass pizza type and pizza size

const myPizza = new Pizza("paneer", "medium");
console.log(myPizza.bake());
console.log(myPizza.type);

//Using getter and setter - used to change the values of class outside of the class - create 2 methods - get and set

myPizza.setCrust("cheese burst");
console.log(myPizza.getCrust());

//Add toppings - used array - so we have to use push in set

myPizza.setToppings("capsicum");
console.log(myPizza.getToppings());

myPizza.setToppings("tomato");
console.log(myPizza.getToppings());


