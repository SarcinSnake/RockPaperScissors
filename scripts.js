let playerScore = 0;
let computerScore = 0;

function playGame(){
    let getPlayerChoice = prompt("Input your choice here!")
    let playerChoice = getPlayerChoice.toLowerCase();
    let choices = ['rock', 'paper', 'scissors']
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    playRound(playerChoice, computerChoice);
function playRound(playerChoice, computerChoice){
    console.log(`Player has chosen ${playerChoice} and the Computer has chosen ${computerChoice}`)
        if (playerChoice == computerChoice){
            console.log("tie")
        } else if (playerChoice == "rock" && computerChoice == "scissors"){
            console.log("you win!")
            ++playerScore;
        } else if (playerChoice == "paper" && computerChoice == "scissors"){
            console.log("you win!")
            ++playerScore
        } else if (playerChoice == "scissors" && computerChoice == "paper"){
            console.log("you win!")
            ++playerscore
        } else{
            console.log("You lose :(")
            ++computerScore
        }
    }
      if (playerScore == 5){
        console.log("player wins!")
    } else if (computerScore == 5) {
        console.log("le computer wins!")
    } else{
        playGame();
    }
}
playGame()