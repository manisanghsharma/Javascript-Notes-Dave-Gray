//Easy rock, paper, scissors game

switch(Math.floor(Math.random() * 4) + 1){

    case 1:
        console.log("Rock");
        break;

    case 2:
        console.log("Paper");
        break;

    case 3:
        console.log("Scissors");
        break;

    default:
        console.log("Wrong Choice");
}