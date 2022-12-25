function getCompChoice () {
    let items=['rock','paper','scissors']
    let randomIndex=Math.floor(Math.random()* 3)
    let randomItem=items[randomIndex]
    return randomItem
}
let playerChoice=prompt('rock,paper or scissors?')
let compSelect=getCompChoice()

function playRound(compSelect,playerChoice) {
    if (compSelect===playerChoice) {
        return 'draw'
    } else if ((compSelect==='rock' && playerChoice===/paper/gi) ||
               (compSelect==='paper' && playerChoice===/scissors/gi) ||
               (compSelect==='scissors' && playerChoice===/rock/gi) ) 
        {
        return 'you win'
    } else {
        return 'you lose'
    }
}

