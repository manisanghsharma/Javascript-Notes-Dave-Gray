const button = document.querySelector("button");
const text = document.querySelector("h3");

let clickcount = 1;
button.addEventListener("click", function(){
    text.innerHTML = ` You have clicked the button ${clickcount} times!`;
    clickcount++;
})