function computerChoice() {
    let result = Math.floor((Math.random()*3)+1)
    if(result === 1){
        console.log('Computer: Rock')
    } else if(result === 2) {
        console.log('Computer: Paper')
    } else {
        console.log('Computer: Scissors')
    }
    return;    
}
computerChoice()