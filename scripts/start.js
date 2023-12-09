/**
 * Script for handling the start button click event to initiate the word guessing game.
 *
 * @file
 * @description This script listens for a click event on the "Start" button, retrieves the entered word count from the input field,
 * validates it within the allowed range (1 to 10), sets the word count in local storage, and redirects the user to the game page
 * if the input is valid. Displays an alert for invalid inputs with a message urging compliance.
 */
document.getElementById('start').addEventListener('click', function() {
    // Get the input element for word count
    const wordCountInput = document.getElementById('wordCount');

    // Parse the entered word count as an integer
    const wordCount = parseInt(wordCountInput.value, 10);

    // Check if the entered word count is within the allowed range (1 to 10)
    if (wordCount >= 1 && wordCount <= 10) {
        // Store the valid word count in local storage
        localStorage.setItem('wordCount', wordCount);

        // Redirect the user to the game page
        window.location.href = 'game.html';
    } else {
        // Display an alert for invalid inputs
        alert('Invalid input!\n\nPlease enter a number between 1 and 10. \nFailure to comply may result in serious consequences.');
    }
});
