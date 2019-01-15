import './styles.css';
import { getRandomInt, ready } from './utils';

let 
    secretNumber, 
    gameTiles,
    gameTileClass = 'square',
    winningTileClass = 'winner',
    loosingTileClass = 'loser';

function doIt() {
    // find all gameTiles
    gameTiles = document.querySelectorAll('.' + gameTileClass);
    console.log(gameTileClass,'s detected: ', gameTiles.length);
    /*Notes:
        The statement below selects only the first found DOM element rather than all matching elements as the statement above does)
            document.querySelector('.square');
    */

    // each should do something when clicked
    gameTiles.forEach(function(gameTile, index) {
        gameTile.addEventListener('click', handleClick);
        gameTile.dataset.number = (index+1).toString();
    });

    // get a random number
    secretNumber = getRandomInt(1, gameTiles.length);
    console.log('Secret# is: ', secretNumber);
}

function handleClick(evt) {
    let currentTile = this;
    let selectedElementInt = parseInt(this.dataset.number);
    
    if(selectedElementInt === secretNumber) {
        console.log('You Won with ',gameTileClass,' #',selectedElementInt,'!');
        this.classList.add(winningTileClass);
        // this.removeEventListener('click', handleclick)

        gameTiles.forEach(function(gameTile){
            //disable all gameTiles
            gameTile.removeEventListener('click', handleClick);

            //make others grey (if they don't already have it)
            if (gameTile !== currentTile && !gameTile.classList.contains(loosingTileClass)){
                gameTile.classList.add(loosingTileClass);
            }
        });
    } else {
        console.log('Try again, ...');
        this.classList.add(loosingTileClass);
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