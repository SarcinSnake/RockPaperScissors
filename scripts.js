

//Prompt the user for an input

let playerChoice = prompt("Enter Rock, Paper, or Scissors to start.", )
let computerChoice = getComputerChoice();
let computerWins = 0;
let playerWins = 0
// Create a function that randomly generates a number
function getRandomInt(){
   return Math.round(Math.random() * 2);
}

// return Rock, Paper, or Scissors depending on random value
function getComputerChoice(){
    switch(getRandomInt()){
        case 0:
            console.log("Rock");
            return "Rock";
        case 1:
            console.log("paper");
            return "Paper";
        case 2:
            console.log("Scissors");
            return "Scissors";
        default:
            return "error";
    }
    
};
// Takes playerChoice and Computer choice and compares to determine winner
function playRound(playerChoice, computerChoice){
    switch (playerChoice.toLowerCase()){
        case "rock":
            if (computerChoice == "Rock"){
                alert("Tie! ")
                break;
            } else if (computerChoice == "Paper"){
                alert("You lose... Paper beats Rock.")
                computerWins++;
                break;
            } else if (computerChoice == "Scissors") {
                alert("You win! Rock beats Scissors")
                playerWins++;
                break;
            } 
        case "paper":
            if (computerChoice == "Paper"){
                alert("Tie!")
                break;
            } else if (computerChoice == "Scissors"){
                alert("You lose... Scissors beats Paper")
                computerWins++;
                break;
            } else if (computerChoice == "Rock"){
                alert ("You win! Paper beats Rock")
                playerWins++;
                break;
            };
        
        case "scissors":
            if (computerChoice == "Scissors"){
                alert ("Tie!");
                
                break;
            } else if (computerChoice == "Rock"){
                alert ("You lose... Rock beats Scissors");
                computerWins++;
                break;
            } else if (computerChoice == "Paper"){
                alert ("You win! Scissors beats Paper");
                playerWins++;
                break;
            
            }
     }
    }

    function getWinner(playRound){
        for(let i = 1; i < 5; i++){
            console.log(playRound())
        }
        if (computerWins > playerWins){
            return `The computer wins. ${computerWins} out of 5 games.`
        } else {
            return `You win! ${playerWins} out of 5 games.`
        }
    }
console.log(playRound(playerChoice));


