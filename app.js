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
    return;    
}
getComputerChoice()

function getHumanChoice() {
    const userChoice = prompt('Rock,Paper or Scissors? ');
    return;
}
getHumanChoice()