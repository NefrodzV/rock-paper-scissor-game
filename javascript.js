let choices = ["rock","paper","scissor"]
let computerScore =0;
let playerScore =0;




function computerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)]
    return choice
}

const header= document.querySelector('#score');
const score = document.createElement('h1');
score.textContent = playerScore;
header.appendChild(score);

// Computer score
const computerHeader = document.querySelector('#computer-score')
const computerScoreHeader = document.createElement('h1');
computerScoreHeader.textContent = computerScore;
computerHeader.appendChild(computerScoreHeader);


const body = document.querySelector('body');
const winnerDiv = document.createElement('div');
body.appendChild(winnerDiv);

function createWinnerDiv() {
    if(playerScore == 5) {
        winnerDiv.textContent = "You Win!!! AWESOME!!!";
    } else if(computerScore == 5) {
        winnerDiv.textContent = "Aw shucks!!! You lost...";
    }
}
function updateScore() {
    score.textContent = playerScore;
    computerScoreHeader.textContent = computerScore;

}

function play (playerChoice, computerChoice) {
    let choice = playerChoice.toLowerCase()
    switch(choice) {
        case "rock":
            if(computerChoice == "scissor") {
                playerScore++
                console.log("You win! Rock beats scissor.")
            }

            if(computerChoice == "paper") {
                computerScore++
                console.log( "You lose! Paper beats rock.")
                
            }

            if (computerChoice == "rock") {
                console.log("Draw!")
            }
        break;

        case "paper":
            if(computerChoice == "scissor") {
                computerScore++
                console.log("You lose! Scissor beats paper.")
                
            }
 
            if(computerChoice == "paper") {
                console.log("Draw!")
            }
 
            if (computerChoice == "rock") {
                playerScore++
                console.log("You win! Paper beats rock.")
                
            }

        break;

        case "scissor":
            if(computerChoice == "scissor") {
                console.log("Draw!")
            }
 
            if(computerChoice == "paper") {
                playerScore++
                console.log("You win! Scissor beats paper.")

            }
 
            if (computerChoice == "rock") {
                computerScore++
                console.log( "You lose! Rock beats scissor.")
            }
        break;

        default:
            return "Please make a appropiate selection! Type rock, paper or scissor"
        
    }

    updateScore();
    createWinnerDiv()
    
}




const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', function (e){
        // console.log(button.id)
        console.log(play(button.id, computerChoice()))
    })
})


