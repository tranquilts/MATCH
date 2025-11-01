// Get the stored move count from localStorage
const movesUsed = localStorage.getItem("movesCount");

// Find the button element
const movesButton = document.getElementById("no-of-moves");

// Update its text content
if (movesUsed) {
  movesButton.textContent = `Number of Moves: ${movesUsed}`;
} else {
  movesButton.textContent = `Number of Moves: N/A`;
}

// Optional: add functionality for "Play Again" button
document.getElementById("play-again").addEventListener("click", () => {
  // Clear previous game data if needed
  localStorage.removeItem("movesCount");

  // Go back to gameplay page
  window.location.href = "gameplay.html";
});