//There was no way to create javascript private field, this can be done with the help of function

//Factory Function

function pizzaFactory(pizzaSize){
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza!`)
    };
}

//size, crust - cannot be accessed outside the function
const myPizza = pizzaFactory("small");
myPizza.bake();

//This is a workaround