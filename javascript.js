let choices = ["rock","paper","scissor"]
let computerScore =0;
let playerScore =0;




function computerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)]
    return choice
}

const header= document.querySelector('#score');
const score = document.createElement('h1');
header.appendChild(score);


function updateScore() {
    score.textContent = playerScore;
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
    
    
}




const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', function (e){
        // console.log(button.id)
        console.log(play(button.id, computerChoice()))
    })
})


