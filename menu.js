//  Access the screens
const mainMenu = document.getElementById("instructions-screen");
const settingsMenu = document.getElementById("settings-screen");

// Reference the buttons
const playBtn = document.getElementById("start-game-btn");
const settingsBtn = document.getElementById("settingsButton");
const backBtn = document.getElementById("settings-back");

// Function to switch between screens
function switchScreen(showScreen) {
  // Hide both
  mainMenu.classList.add("hidden");
  settingsMenu.classList.add("hidden");

  // Show the right screen
  showScreen.classList.remove("hidden");
}

//  Add event listeners
playBtn.addEventListener("click", () => {
  // Go to gameplay page
  window.location.href = "gameplay.html";
});

settingsBtn.addEventListener("click", () => {
  switchScreen(settingsMenu);
});

backBtn.addEventListener("click", () => {
  switchScreen(mainMenu);
});

