//Rock Paper Scissors Game

let game = confirm("Shall we play a game?");

if(game){
    let playerChoice = prompt("Pick your choice\nRock, Paper or Scissors?");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            let compChoice = Math.floor(Math.random() * 3 + 1);
            let playerTwo = compChoice === 1 ? "rock" : compChoice === 2 ? "paper" : "scissors";

            if(playerOne === playerTwo){

                alert("Computer chose " + playerTwo + ". It's a Tie!");
            }
            else if((playerOne === "rock" && playerTwo === "scissors") || (playerOne === "paper" && playerTwo === "rock") || (playerOne === "scissors" && playerTwo === "paper")){
                alert("Computer chose " + playerTwo + ". You Win!");
            }
            else{
                alert("Computer chose " + playerTwo + ". You Loose!");
            }

        let playAgain = confirm("Do you want to play again?");
        playAgain === true ? location.reload() : alert("Thanks for playing!");

        }
    }
    else{
        alert("You did not enter Rock, Paper or Scissors.");
    }

    
    
}
else{
    alert("Ok! Have a nice day!");
}