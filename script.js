const counterDisplay = document.getElementById('counter');
let count = 0;

// Buttons
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

// Increase count
increaseBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

// Decrease count
decreaseBtn.addEventListener('click', () => {
  count--;
  updateCounter();
});

// Reset count
resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});

// Update the counter display
function updateCounter() {
  counterDisplay.textContent = count;
}
