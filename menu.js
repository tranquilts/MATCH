//Get reference to gameplay and setting menu screens
const mainMenu = document.getElementById("menu-screen");
const settingsMenu = document.getElementById("settings-screen");

//Use buttons to navigate the screens
const playBtn = document.getElementById("play-btn");
const settingsBtn = document.getElementById("settings-icon");
const backBtn = document.getElementById("settings-back");

//Function to change screens
function switchScreen(show) {
  mainMenu.classList.add("hidden");
  settingsScreen.classList.add("hidden");
  show.classList.remove("hidden");

  //Play Now button
  playBtn.addEventListener('click', ()=>{
    window.location.href="gameplay.html";
  });

  //Open settings menu
  settingsBtn.addEventListener('click', ()=> {
    switchScreen(settingsScreen);
  });

  //Return to main menu from settings menu
  backBtn.addEventListener('click', ()=>{
    switchScreen(mainMenu); });
}
