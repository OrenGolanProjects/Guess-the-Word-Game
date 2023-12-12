// app.js

// Import the Game class from the game.js file and the getPuzzle function from request.js
import { Game } from './game.js';
import { getPuzzle } from './request.js';

// Get references to HTML elements
const puzzleDIV = document.querySelector('#puzzle');
const remainingDIV = document.querySelector('#guesses');
const timerElement = document.getElementById('timer');
const guessedLettersDIV = document.getElementById('guessedLetters');

let game; // Variable to store the Game instance


// Event listener for keypress events to handle user guesses
window.addEventListener('keydown', function(e) {
    const guess = String.fromCharCode(e.keyCode);
    game.makeGuess(guess);
    render();
});


// Define the updateTimerDisplay function to update the timer element content
function updateTimerDisplay() {
    if (timerElement && game && typeof game.timerDuration === 'number') {
        timerElement.textContent = `Time: ${game.timerDuration}s`;
    }
}

// The render function updates the HTML based on the current game state
function render() {
    puzzleDIV.innerHTML = '';
    remainingDIV.textContent = game.statusMessage;

    game.puzzle.split('').forEach(function (letter) {
        const letterEl = document.createElement('span');
        const trimmedLetter = letter.trim();

        if (trimmedLetter === '') {
            letterEl.classList.add('space');
        } else {
            // Check if the letter has been guessed
            if (game.guessedLetters.includes(trimmedLetter)) {
                letterEl.textContent = trimmedLetter;
            } else {
                letterEl.textContent = '_'; // Replace unrevealed letters with underscores
            }
        }

        puzzleDIV.appendChild(letterEl);
    });

    // Update the timer display
    updateTimerDisplay();

    // Display guessed letters
    guessedLettersDIV.textContent = `Guessed Letters: ${game.guessedLettersString}`;
}

// Function to start a new game
function startGame() {
    const wordCount = localStorage.getItem('wordCount') || '1';

    // Log the start of the game with the chosen word count
    console.log('Starting game with wordCount:', wordCount);

    // Stop the timer and reset the game if it already exists
    if (game) {
        game.stopTimer();
        game = null;
    }

    // Fetch a new puzzle using the getPuzzle function
    getPuzzle(wordCount)
        .then(function(puzzle) {
            // Create a new Game instance with the fetched puzzle, a timer duration of 30 seconds, and a max word length of 10
            game = new Game(puzzle, 10, 30);
            
            // Update the timer display and start the timer
            updateTimerDisplay();
            game.startTimer();
            
            // Render the initial state of the game
            render();
        })
        .catch(function(error) {
            // Handle errors when fetching the puzzle
            console.error('Error fetching puzzle:', error);
        });
}

// Add an event listener to the reset button to start a new game when clicked
document.querySelector('#reset').addEventListener('click', startGame);

// Start the initial game when the script is loaded
startGame();
