//4 Pillars of DOM

//1. Selection of an element
//2. Changing HTML

//For selecting any query - inside double quotes - for class - ".classname"

const head = document.querySelector("h1"); //selects first element
console.log(head);

head.innerHTML = "ChangedHTML";

//3. Changing CSS
const head2 = document.querySelector("h2");
head2.style.color = "red";
head2.style.backgroundColor = "Orange"; //backgroundColor is written in cammel case, not like background case

//4. Event Listenener

//"click" pe function execute hoga
head.addEventListener("click", function(){
    console.log("Don't Click!");
})

head2.addEventListener("click", function(){
    head2.innerHTML = "Badal gya hoon main!"
    head2.style.color = "yellow"
    head2.style.backgroundColor = "black";
})

//Bulb ON OFF
const bulb = document.querySelector("#bulb");
const button = document.querySelector("button");

let flag=0;

button.addEventListener("click", function(){
    if(flag === 0){
    bulb.style.backgroundColor = "yellow";
    button.innerHTML = "OFF";
    flag = 1;
    }

    else{
    bulb.style.backgroundColor = "black";
    button.innerHTML = "ON";
    flag = 0;
   }

})

const head3 = document.querySelectorAll("h1"); //selects all h1
