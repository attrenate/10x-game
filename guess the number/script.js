// script for the game
const secret = generateRandomNum();
const checkBtn = document.querySelector('check-btn');

checkBtn.addEventListener('click', checkguess());




function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1; // 1 to 20
  }