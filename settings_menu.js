function goToMainMenu(){
    window.location.href = "menu.html"; // goes to main menu page
}
@@ -10,10 +12,15 @@ function quitGame(){
    window.location.href = "goodbye.html"; // goes to goodbye page
}




document.querySelector('#btn-back').addEventListener('click', () => {
    history.back();
});


document.getElementById('restart-btn').addEventListener('click', resetGame);
document.getElementById('main-menu-btn').addEventListener('click', goToMainMenu);
document.getElementById('quit-btn').addEventListener('click', quitGame);
