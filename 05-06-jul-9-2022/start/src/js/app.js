// Write your code here
import { gameWon, addTile } from './tiles.js';
import { getWord, isInDictionary } from './words.js';

// Grab the input box to get the word that the user types
let inputEl = document.querySelector('input');

let word = getWord();

console.log( word );

// Set a total number of chances as 6
let totalChances = 6;

inputEl.addEventListener('keyup', (event) => {
    let keyPressed = event.key;

    // console.log( keyPressed );

    let guess = event.target.value.toLowerCase();

    console.log( guess );

    if( keyPressed === 'Enter' && guess.length === 5 && totalChances > 0 ) {
        // console.log( 'todo - check the eneterd characters against the word' );

        if (word === guess) {
            // colleague's code that prints a game won message on screen
            gameWon(word);
            
            // Empty out the input box
            event.target.value = '';
            return; // stop execution
        }

        if (isInDictionary(guess)) {
            // With every chance, subtract 1 from the total number of available chances until you run out
            totalChances = totalChances - 1;

            console.log( totalChances );

            // we shall step through the 5 letters one-by-one
            for (let x = 0; x < 5; x++) {
                // console.log( x ); // 0, 1, 2, 3, 4

                if (word[x] === guess[x]) {
                    addTile(guess[x], 'green');
                } else if (word.includes(guess[x])) {
                    addTile(guess[x], 'orange');
                } else {
                    addTile(guess[x], 'grey');
                }
            }
        }

    } else if(keyPressed === 'Enter' && guess.length < 5 ) {
        alert( 'You entered fewer than 5 characters' )
    }
});