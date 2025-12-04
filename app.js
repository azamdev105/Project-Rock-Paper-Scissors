//Variables to keep track of the players score
let humanScore = 0;
let computerScore = 0;

//ComputerChoice
function getComputerChoice() {
    let randomNum = Math.floor((Math.random()*3)+1);
    let choice;
    if(randomNum === 1) {
        choice = 'rock'
    } else if(randomNum === 2) {
        choice = 'paper'
    } else if(randomNum === 3) {
        choice = 'scissors'
    }
    console.log(`Computer: ${choice}`);
    
    return choice;
}

//HumanChoice
function getHumanChoice() {
    let userInput = prompt('“Rock”, “Paper” or “Scissors”');
    console.log(userInput);
    return userInput.toLowerCase(); 
}


//playRound
function playRound(humanChoice,computerChoice) {
    // Make your function’s humanChoice parameter case-insensitive
    if(humanChoice === computerChoice) {
        console.log("It's a Draw!");
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You Won! Rock beats Scissors');
    } else if(humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You Loss! Rock beats Scissors');
    } else if(humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You Won! Scissors beats Paper');
    } else if(humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You Loss! Scissors beats Paper');
    } else if(humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You Won! Paper beats Rock');
    } else if(humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You Loss! Paper beats Rock');
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
playRound(humanSelection,computerSelection)