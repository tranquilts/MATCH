

function goToMainMenu(){
    window.location.href = "./menu.html"; // goes to main menu page
} catch (error) {
    alert("Couldn't open menu.html - make sure it's in the same folder!"); // error message
}

function resetGame(){
    window.location.href = "gameplay.html"; // restarts the game
    catch (error) {
    alert("Couldn't open menu.html - make sure it's in the same folder!"); // error message
}

function quitGame(){
    window.location.href = "goodbye.html"; // goes to goodbye page
    catch (error) {
    alert("Couldn't open menu.html - make sure it's in the same folder!"); // error message
}




document.querySelector('#btn-back').addEventListener('click', () => {
    history.back();
});


document.getElementById('restart-btn').addEventListener('click', resetGame);
document.getElementById('main-menu-btn').addEventListener('click', goToMainMenu);
document.getElementById('quit-btn').addEventListener('click', quitGame);

