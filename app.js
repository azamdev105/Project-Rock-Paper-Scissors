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
function playRound(humanChoice,computerChoice,humanScore,computerScore) {
    if(humanChoice === computerChoice) {
        console.log("It's a Draw!");
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        console.log('You Won! Rock beats Scissors');
    } else if(humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore += 1;
        console.log('You Loss! Rock beats Scissors');
    } else if(humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        console.log('You Won! Scissors beats Paper');
    } else if(humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore += 1;
        console.log('You Loss! Scissors beats Paper');
    } else if(humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        console.log('You Won! Paper beats Rock');
    } else if(humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
        console.log('You Loss! Paper beats Rock');
    }
}

// playGame 
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let i = 0;
    
    while (i < 5)
    {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection, humanScore, computerScore);
    i++;
    }
    if (humanScore > computerScore) {
        alert("Game ended, human wins.");
    }
    else if (computerScore > humanScore) {
        alert("Game ended, computer wins.");
    }
    else {
        alert("Game ended, It's a tie.");
    }
}

playGame()