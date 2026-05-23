# Wordle

A simple browser-based Wordle clone built with HTML, CSS, and JavaScript.

## Project Overview

- Two game modes:
  - **Word of the Day**: A daily puzzle page at `index.html`
  - **Random Word**: A random puzzle page at `randomword.html`
- 5-letter word guesses
- Up to 6 attempts per game
- Input focus moves automatically as letters are entered
- Basic guess submission logic is implemented for the Word of the Day page

## Files

- `index.html` — main Word of the Day game page
- `randomword.html` — random word game page
- `style.css` — styles for both pages
- `wordle.js` — input navigation and guess submission logic

## Current Behavior

- Each page includes 6 rows of 5 letter input fields
- `wordle.js` handles keyboard navigation:
  - moves focus to the next field after a valid letter
  - moves focus backward when Backspace is pressed on an empty field
- `submitGuess(rowNumber)` collects guesses and makes inputs read-only after submission

## Notes / TODOs

- Game result validation is not fully implemented yet
- Word matching, feedback coloring, and win/lose handling are still pending
- The random word mode does not yet have full submission and reset logic

## How to Run

Open `index.html` or `randomword.html` in a web browser.
