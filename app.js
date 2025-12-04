//Variables to keep track of the players score
let humanScore = 0;
let computerScore = 0;

//ComputerChoice
function getComputerChoice() {
    const randomNum = Math.floor((Math.random()*3)+1);
    switch(randomNum) {
        case 1:
            console.log('Computer: Rock');
            break;
        case 2:
            console.log('Computer: Paper');
            break;
        case 3:
            console.log('Computer: Scissors');
            break;   
    }
    return;
}

//HumanChoice
function getHumanChoice() {
    let userInput = prompt('“Rock”, “Paper” or “Scissors”');
    console.log(userInput);
}
getHumanChoice()
