let max = 3
let rounds = 5
let score = ""


function GetUserChoice (user_input) {
    switch (user_input.toUpperCase()) {
        case "ROCK":
            return 0;
        case "PAPER":
            return 1;
        case "SISSORS":
            return 2;
        default:
            return "ERROR";
    }
}

function GetComputerChoice(max) {
    return Math.floor(Math.random() * max)
}


for (let i = 0; i < rounds; i++) {
    let user_input = prompt("Rock Paper or Sissors? ")
    let computer_selection = GetComputerChoice(max)
    let user_selection = GetUserChoice(user_input)
    if (computer_selection === user_selection) {
            score += "TIE ";
    } else {
            switch (computer_selection) {
                case 0:
                    if (user_selection === 1) {
                        score += "WIN ";
                    } else if (user_selection === 2) {
                        score += "LOSS ";
                    }
                    break;
                case 1: 
                    if (user_selection === 0) {
                        score += "LOSS ";
                    } else if (user_selection === 2) {
                       score += "WIN "
                    }
                    break;
                case 2:
                    if (user_selection === 0) {
                        score += "WIN ";
                    } else if (user_selection === 1) {
                        score += "LOSS ";
                    } 
                    break;
            }
        }
}

console.log(score)