let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const result = Math.floor((Math.random()*3)+1);
    if(result === 1){
        console.log('Computer: Rock')
    } else if(result === 2) {
        console.log('Computer: Paper')
    } else {
        console.log('Computer: Scissors')
    }
    return result;    
}
getComputerChoice()

function getHumanChoice() {
    let userChoice = prompt('Rock,Paper or Scissors? ');
    return console.log(`${userChoice}`);
}
getHumanChoice()

function playRound(humanChoice,computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    return;
    
    // if(humanChoice === 'Rock' && computerChoice === 'Scissors') {
    //     console.log('You Win! Rock beats Scissors')
    // } else if(computerChoice == 'Rock' && humanChoice == 'Scissors') {
    //     console.log('You Loss! Rock beats Scissors')
    // }
    // if(humanChoice == 'Scissors' && computerChoice == 'Paper') {
    //     console.log('You Win! Scissors beats Paper')
    // } else if(computerChoice == 'Scissors' && humanChoice == 'Paper') {
    //     console.log('You Loss! Scissors beats Paper')
    // }
    // if(humanChoice == 'Paper' && computerChoice == 'Rock') {
    //     console.log('You Win! Paper beats Rock')
    // } else if(computerChoice == 'Paper' && humanChoice == 'Rock') {
    //     console.log('You Loss! Paper beats Rock')
    // }
    // if(humanChoice == 'Paper' && computerChoice == 'Scissors') {
    //     console.log('You Win! Paper beats Scissors')
    // } else if(computerChoice == 'Paper' && humanChoice == 'Scissors') {
    //     console.log('You Loss! Paper beats Scissors')
    // }
    // if(humanChoice == 'Scissors' && computerChoice == 'Rock') {
    //     console.log('You Win! Scissors beats Rock')
    // } else if(computerChoice == 'Scissors' && humanChoice == 'Rock') {
    //     console.log('You Loss! Scissors beats Rock')
    // }
    // if(humanChoice == 'Rock' && computerChoice == 'Paper') {
    //     console.log('You Win! Rock beats Paper')
    // } else if(computerChoice == 'Scissors' && humanChoice == 'Rock') {
    //     console.log('You Loss! Rock beats Paper')
    // }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(humanSelection,computerSelection)