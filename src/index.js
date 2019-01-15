import './styles.css';
import { getRandomInt, ready } from './utils';

let secretNumber, squares;

function doIt() {
    // find all squares
    squares = document.querySelectorAll('.square');
    console.log('Squares detected: ', squares.length);
    /*Notes:
        The statement below selects only the first found DOM element rather than all matching elements as the statement above does)
            document.querySelector('.square');
    */

    // each should do something when clicked
    squares.forEach(function(square, index) {
        square.addEventListener('click', handleClick);
        square.dataset.number = (index+1).toString();
    });

    // get a random number
    secretNumber = getRandomInt(1, squares.length);
    console.log('Secret# is: ', secretNumber);
}

function handleClick(evt) {
    let currentSquare = this;
    let selectedElementInt = parseInt(this.dataset.number);
    
    if(selectedElementInt === secretNumber) {
        console.log('You Won with tile #',selectedElementInt,'!');
        this.classList.add('winner');
        // this.removeEventListener('click', handleclick)

        squares.forEach(function(square){
            //disable all squares
            square.removeEventListener('click', handleClick);

            //make others grey (if they don't already have it)
            if (square !== currentSquare && !square.classList.contains('loser')){
                square.classList.add('loser');
            }
        });
    } else {
        console.log('Try again, ...');
        this.classList.add('loser');
    }
    
}

// function handleClick(evt) {
//     let selectedElementInt = parseInt(this.dataset.number);
//     let isWinner = selectedElementInt === secretNumber;
//     console.log(isWinner 
//         ? 'You Won with tile #'+selectedElementInt+'!' 
//         : 'Try again, ...'
//     );
//     this.classList.add(isWinner ? 'winner': 'loser');
// }

// function endGameCleanup() {
//     // disable all tiles

//     // apply loser class to all non-secret tiles
// }

ready(doIt);