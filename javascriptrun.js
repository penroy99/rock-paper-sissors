function getUserChoice(user_input) {
    switch (user_input.toUpperCase()) {
        case "ROCK":
            return 0;
        case "PAPER":
            return 1;
        case "SCISSORS":
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
        return 'tie';
} else {
    switch (computer_selection) {
        case 0:
            if (user_selection === 1) {
                return 'user';
            } else if (user_selection === 2) {
                return 'computer';
            }
        case 1: 
            if (user_selection === 0) {
                return 'computer';
            } else if (user_selection === 2) {
               return 'user';
            }
        case 2:
            if (user_selection === 0) {
                return 'user';
            } else if (user_selection === 1) {
                return 'computer';
            } 
}}}

function rounds(user_score, computer_score) {
    if (user_score >= 3) {
        alert("The User Won!");
        return true;
    } else if (computer_score >= 3) {
        alert("The Computer Won!");
        return true;
    } else {
        return false;
    }
}

function startGame() {
    userScore.textContent = 0;
    computerScore.textContent = 0;
    alert('Fight Start!');

    let user_score = 0;
    let computer_score = 0;
    let quit = false;
    const options = 3

    while (quit === false) {
        
        const user_input = prompt("rock paper or scissors?")
        const user_selection = getUserChoice(user_input);
        const computer_selection = getComputerChoice(options);
        const point = game(user_selection, computer_selection);

        if (point === 'tie') {
            alert('tie');
        } else if (point === 'user') {
            alert('point for user');
            user_score ++;
            userScore.textContent ++;
        } else if (point === 'computer') {
            alert('point for computer');
            computer_score ++;
            computerScore.textContent ++;
        }

        quit = rounds(user_score, computer_score);
    }
}

startButton = document.querySelector('#start-button');
const userScore = document.querySelector('#user-score');
const computerScore = document.querySelector('#computer-score');

startButton.addEventListener('click', startGame);

///////// ///////// ///////// ///////// ///////// ///////// ///////// ///////// 

function makeSelection(pick) {
    const myHero = document.querySelector(`#${pick}`);
    return myHero.classList.add('my-hero');
}

const selectionButtons = document.querySelectorAll('[data-hero]');
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.hero;
        makeSelection(selectionName);
    })
})
