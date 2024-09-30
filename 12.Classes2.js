//Classes were introduced in 2015

//Parent or Superclass
class Pizza{
    constructor(pizzaSize){
        this.size = pizzaSize;
        this.crust = "original";
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
}

//Creating child class - extends
class SpecialityPizza extends Pizza {
    constructor(pizzaSize){
        super(pizzaSize); //super() calls the constructor of the parent
        this.type = "It works";
    }

    slice(){
        console.log(`Our ${this.type} ${this.size} ${this.crust} pizza has 8 slices.`);
    }
}

const mySpeciality = new SpecialityPizza("medium");
mySpeciality.slice();