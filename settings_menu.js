
// performs all redirects consistently
function goToMainMenu() {
  const target = "./menu.html"; // points to your menu file in same folder

  // Check if menu.html actually exists before redirecting
  fetch(target, { method: "HEAD" })
    .then(response => {
      if (response.ok) {
        window.location.href = target;
      } else {
        console.error("menu.html not found");
        alert("Could not find menu.html — make sure it's in the same folder!");
      }
    })
    .catch(() => {
      // fallback if fetch fails (e.g. file:// restriction)
      window.location.href = target;
    });
}

// 🕹️
function goToMainMenu(){
    window.location.href = "./menu.html"; // goes to main menu page


function resetGame(){
    window.location.href = "gameplay.html"; // restarts the game


function quitGame(){
    window.location.href = "goodbye.html"; // goes to goodbye page





document.querySelector('#btn-back').addEventListener('click', () => {
    history.back();
});


document.getElementById('restart-btn').addEventListener('click', resetGame);
document.getElementById('main-menu-btn').addEventListener('click', goToMainMenu);
document.getElementById('quit-btn').addEventListener('click', quitGame);

