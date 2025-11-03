// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("playBtn");
  const settingsBtn = document.getElementById("settings-btn");

  // If "Play Now" button is clicked → go to gameplay page
  if (playBtn) {
    playBtn.addEventListener("click", () => {
      window.location.href = "gameplay.html";
    });
  }

  // If "Settings" button is clicked → go to settings page
  if (settingsBtn) {
    settingsBtn.addEventListener("click", () => {
      window.location.href = "settings.html";
    });
  }
});