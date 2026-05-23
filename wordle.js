/**
 * Moves focus to the next input field if the current field is full and only allows letters
 * @param {*} current - The current input field
 * @param {*} nextFieldID - The ID of the next input field to focus on
 */
function moveToNext(current, nextFieldID) {
    current.value = current.value.replace(/[^a-zA-Z]/g, '');

  // Check if current field is full
  if (current.value.length >= current.maxLength) {
    // Focus the specific next field by its ID
    document.getElementById(nextFieldID).focus();
  }
}

/**
 * Moves focus to the previous input field if the current field is empty and backspace is pressed
 * @param {*} current - The current input field
 * @param {*} event - The keydown event
 */
function moveBackward(current, event) {
  if (event.key === 'Backspace' && current.value.length === 0) {
    let previous = current.previousElementSibling;
    while (previous && previous.tagName !== 'INPUT') {
      previous = previous.previousElementSibling;
    }
    if (previous) {
      previous.focus();
    }
  }
}

let guesses = [];

function submitGuess(rowNumber) {
  let guess = "";
  for (let i = 1; i <= 5; i++) {
    const input = document.getElementById(`${rowNumber}-${i}`);
    guess += input.value;
    input.readOnly = true; // Make the input read-only after submission
  }
  guesses.push(guess);
  console.log("Current Guesses:", guesses);
}

// TODO: add all the post-fetch logic to update the UI based on the response from the server
// TODO: add logic to disable the current row and enable the next row after submission
// TODO: add logic to check if the guess is correct and display appropriate messages
// TODO: add logic to handle the end of the game (win/lose) and display appropriate messages
// TODO: add logic to reset the game and clear all inputs for a new game in randomword.html
// TODO: erase the guess if the guess is unvalid word and allow the user to re-enter the guess in randomword.html