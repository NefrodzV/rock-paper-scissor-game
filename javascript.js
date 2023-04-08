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
const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', function (e){
        console.log(button.id)
        console.log(play(button.id, computerChoice()))
    })
})


