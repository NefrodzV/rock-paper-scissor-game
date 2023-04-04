let choices = ["rock","paper","scissor"]
let computerScore =0;
let playerScore =0;


function computerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)]
    return choice
}

function play (playerChoice, computerChoice) {
    let choice = playerChoice.toLowerCase()
    switch(choice) {
        case "rock":
            if(computerChoice == "scissor") {
                playerScore++
                return "You win! Rock beats scissor."
            }

            if(computerChoice == "paper") {
                computerScore++
                return "You lose! Paper beats rock."
                
            }

            if (computerChoice == "rock") {
                return "Draw!"
            }
        break;

        case "paper":
            if(computerChoice == "scissor") {
                computerScore++
                return "You lose! Scissor beats paper."
                
            }
 
            if(computerChoice == "paper") {
                return "Draw!"
            }
 
            if (computerChoice == "rock") {
                playerScore++
                return "You win! Paper beats rock."
                
            }

        break;

        case "scissor":
            if(computerChoice == "scissor") {
                return "Draw!"
            }
 
            if(computerChoice == "paper") {
                playerScore++
                return "You win! Scissor beats paper."

            }
 
            if (computerChoice == "rock") {
                computerScore++
                return "You lose! Rock beats scissor."
            }
        break;

        default:
            return "Please make a appropiate selection! Type rock, paper or scissor"
        
    }
}

for(let i=0; i < 5;i ++) {

    let playerChoice = prompt("Enter your choice: paper, rock or scissor.")
    let compChoice = computerChoice()
    console.log("Computer chose: " + compChoice)
    console.log("Player chose: " + playerChoice)
    console.log(play(playerChoice, compChoice))
    console.log("Your score: " + playerScore)
    console.log("Computer score: " + computerScore)
    console.log("______________________________________")
    if(i==4) {
        if(playerScore > computerScore) {
            console.log("You won " + playerScore + "and computer won " + computerScore)
        } else if (playerScore < computerScore) {
            console.log("You lost. Computer won" + computerScore+ "and you won " + playerScore)

        } else {
            console.log("There is a draw")

        }
    }
}

