function getUserChoice(user_input) {
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

function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}

function game(user_selection, computer_selection) {
    if (computer_selection === user_selection) {
        return;
} else {
    switch (computer_selection) {
        case 0:
            if (user_selection === 1) {
                return user_score ++;
            } else if (user_selection === 2) {
                return computer_score ++;
            }
        case 1: 
            if (user_selection === 0) {
                return computer_score ++;
            } else if (user_selection === 2) {
               return user_score ++;
            }
        case 2:
            if (user_selection === 0) {
                return user_score ++;
            } else if (user_selection === 1) {
                return computer_score ++;
            } 
}}}

function rounds(user_score, computer_score) {
    if (user_score < 3 || computer_score < 3) {
        return quit = false;
    } else {
        return quit = true;
    }
}

function declareWinner(user_score, computer_score) {
    if (user_score === 3) {
        return winner = 'THE HERO';
    } else if (computer_score === 3) {
        return winner = 'THE INTRUDER';
    }
}

const MAX = 3
let user_score = 0
let computer_score = 0
let quit = false;

while (quit === false) {
    let user_input = prompt('Rock Paper or Sissors? ');
    let user_selection = getUserChoice(user_input);
    let computer_selection = getComputerChoice(MAX);
    game(user_selection, computer_selection);
    rounds(user_score, computer_score);
}

console.log(declareWinner(user_score, computer_score));