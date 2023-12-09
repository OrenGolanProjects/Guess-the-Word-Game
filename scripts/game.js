// game.js

/**
 * A class representing a word guessing game.
 * @class
 */
export class Game {
    /**
     * Creates a new instance of the Game class.
     * @constructor
     * @param {string} word - The word to be guessed.
     * @param {number} remainingGuesses - The number of remaining incorrect guesses allowed.
     * @param {number} timerDuration - The duration of the timer in seconds (default is 30 seconds).
     */
    constructor(word, remainingGuesses, timerDuration = 30) {
        // Initialize game state
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'playing';
        this.timerDuration = timerDuration;
        this.timerInterval = null;

        // Start the timer when a new game is created
        this.startTimer();
    }

    /**
     * Getter for the current puzzle, where guessed letters are revealed and others are hidden.
     * @type {string}
     */
    get puzzle() {
        return this.word
            .map((letter) => (this.guessedLetters.includes(letter) || letter === ' ' ? letter : '_'))
            .join('');
    }

    /**
     * Getter for a string representation of guessed letters.
     * @type {string}
     */
    get guessedLettersString() {
        return this.guessedLetters.join(', ');
    }

    /**
     * Handles a player's guess, updating game state accordingly.
     * @param {string} guess - The letter guessed by the player.
     */
    makeGuess(guess) {
        guess = guess.toLowerCase();

        if (this.status !== 'playing' || !this.isValidGuess(guess)) {
            return;
        }

        if (!this.guessedLetters.includes(guess)) {
            this.guessedLetters.push(guess);
        }

        if (!this.word.includes(guess)) {
            this.remainingGuesses--;
        }

        this.calculateStatus();
    }

    /**
     * Getter for a status message based on the current game status.
     * @type {string}
     */
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`;
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`;
        } else {
            return 'Great work! You guessed the word!';
        }
    }

    /**
     * Calculates the current game status based on guessed letters, remaining guesses, and word completion.
     */
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ');

        if (this.remainingGuesses === 0 || this.timerDuration <= 0) {
            this.status = 'failed';
        } else if (finished) {
            this.status = 'finished';
        } else {
            this.status = 'playing';
        }
    }

    /**
     * Checks if a guess is valid (a single letter not previously guessed).
     * @param {string} guess - The letter guessed by the player.
     * @returns {boolean} - True if the guess is valid, false otherwise.
     */
    isValidGuess(guess) {
        return typeof guess === 'string' && guess.length === 1 && guess.match(/[a-z]/i) && !this.guessedLetters.includes(guess);
    }

    /**
     * Starts the game timer, updating the timer display every second.
     */
    startTimer() {
        // Clear the existing interval to prevent multiple intervals from running concurrently
        this.stopTimer();

        // Set a new interval to update the timer display every second
        this.timerInterval = setInterval(() => {
            if (this.timerDuration > 0) {
                this.timerDuration--;
                updateTimerDisplay(this.timerDuration);
            }
    
            if (this.timerDuration <= 0) {
                this.status = 'failed';
                this.stopTimer();
                this.calculateStatus();
            }
        }, 1000);
    }
    

    /**
     * Stops the game timer.
     */
    stopTimer() {
        clearInterval(this.timerInterval);
    }
}

/**
 * Updates the timer display on the UI.
 * @param {number} time - The remaining time on the timer.
 */
function updateTimerDisplay(time) {
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.textContent = `Time: ${time}s`;
    }
}
