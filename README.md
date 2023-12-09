# Guess the Word Game

Welcome to the Guess the Word Game! This interactive web-based game challenges players to guess hidden words within a specified time frame. The game consists of two main pages: the start page, where players set the game parameters, and the play page, where the guessing happens.

## Table of Contents
- [How to Play](#how-to-play)
- [Installation](#installation)
- [Game Features](#game-features)
- [Navigation](#navigation)

## How to Play

### Start Page:

1. Open `start.html` in your browser.
2. Enter a number between 1 and 10 to determine the number of words you want to guess.
3. Click the "Play!" button to start the game.

### Play Page:

- Once on the play page (`game.html`), you'll see the game title, instructions, and an input field to enter your guesses.
- The game will display a puzzle with underscores representing the letters of the hidden word.
- Type any letter to make a guess.
- You have up to 10 attempts to guess each word.
- If you reach 10 attempts or the timer runs out, you'll receive a message indicating whether you succeeded or failed for that word.
- The game keeps track of guessed letters and remaining attempts.
- Click the "Restart Game" button to start over.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/guess-the-word-game.git

2. Navigate to the project directory:
  cd guess-the-word-game
4. Open the start.html file in your preferred web browser to start the game.


## Game Features
- Dynamic Puzzles: The game generates puzzles with hidden words based on the chosen word count.
- Countdown Timer: Players have a limited time to guess each word, adding an element of challenge to the game.
- Interactive UI: User-friendly interface with clear instructions, input fields, and buttons for an engaging experience.
- Styling: The game features a visually appealing design with carefully crafted CSS styles.
- Persistence: The chosen word count is stored in local storage for a seamless game experience when restarting.

## Navigation
- Start Page (start.html): The initial page where players set the game parameters.
- Play Page (game.html): The main play page where players make guesses and attempt to solve the word puzzles.

