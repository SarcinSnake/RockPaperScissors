function getComputerChoice(){
    let max = 3;
    return Math.floor(Math.random() * max);
}

function computerSelection(){
    switch (getComputerChoice()){
        case 0:
            console.log("Rock");
            break;
        case 1:
            console.log("Paper")
            break;
        case 2:
            console.log("Scissors")
            break;
    }
}

for (let i = 1; i < 10; i++){
    console.log(computerSelection());
}