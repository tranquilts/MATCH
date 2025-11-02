// Main menu buttons
const playBtn = document.getElementById("start-game-btn");
const settingsBtn = document.getElementById("settings-button");

// Direct to gameplay page 
playBtn.addEventListener("click", () => {
    window.location.href = "gameplay.html";
});

// Direct to settings page 
settingsBtn.addEventListener("click", () => {
    window.location.href = "settings_menu.html";
});



