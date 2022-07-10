// Write your code here
import { getWord } from './words.js';

// Grab the input box to get the word that the user types
let inputEl = document.querySelector('input');

let word = getWord();

console.log( word );