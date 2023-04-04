let choices = ["rock","paper","scissor"]

function computerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)]
    return choice
}

function play (playerChoice, computerChoice) {
    let choice = playerChoice.toLowerCase()
    switch(choice) {
        case "rock":
            if(computerChoice == "scissor") {
               return "You win! Rock beats scissor."
            }

            if(computerChoice == "paper") {
                return "You lose! Paper beats rock."
            }

            if (computerChoice == "rock") {
                return "Draw!"
            }
        break;

        case "paper":
            if(computerChoice == "scissor") {
                return "You lose! Scissor beats paper."
            }
 
            if(computerChoice == "paper") {
                return "Draw!"
            }
 
            if (computerChoice == "rock") {
                return "You win! Paper beats rock."
            }

        break;

        case "scissor":
            if(computerChoice == "scissor") {
                return "Draw!"
            }
 
            if(computerChoice == "paper") {
                return "You win! Scissor beats paper."
            }
 
            if (computerChoice == "rock") {
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
    console.log("______________________________________")
}

