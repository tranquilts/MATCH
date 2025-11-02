1. CONSTANTS (REQUIRED FOR ALL SCREENS TO WORK)
// ------------------------------------

const instructionsScreen = document.getElementById('instructions-screen');
const gameScreen = document.getElementById('game-screen');
const settingsScreen = document.getElementById('settings-screen');
const gameGrid = document.getElementById('game-grid'); // Needed for clearing content
const modal = document.getElementById('game-modal'); 

// Essential Game State Variables needed by quit/start logic
let gameActive = false;
let totalMoves = 0; // Used in showModal for quit/win messages

// ------------------------------------
// 2. MODAL & SCREEN NAVIGATION FUNCTIONS
// ------------------------------------

/**
 * Helper function to show and hide screens by managing the 'hidden' class.
 * This is the core of your single-page application navigation.
 * @param {HTMLElement} targetScreen - The screen to show.
 */
function switchScreen(targetScreen) {
    // Hide all main screen containers
    [instructionsScreen, gameScreen, settingsScreen].forEach(screen => {
        if (screen) screen.classList.add('hidden');
    });

    // Show the target screen if it exists
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
    }
}

/** Displays a custom modal message (e.g., win condition). */
function showModal(title, message) {
    if (modal) {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-message').textContent = message;
        modal.classList.remove('hidden');
    }
}

/** Hides the modal. */
function hideModal() {
    if (modal) modal.classList.add('hidden');
}

/** Navigation: Shows the main instructions menu. */
function showInstructions() {
    gameActive = false;
    // Clear the game grid when returning to the menu
    if (gameGrid) gameGrid.innerHTML = ''; 
    switchScreen(instructionsScreen);
}

/** Navigation: Shows the settings menu. */
function showSettings() {
    gameActive = false;
    switchScreen(settingsScreen);
}

/** Action: Stops the game and returns to the main menu. */
function quitGame() {
    gameActive = false;
    showModal('Game Ended', `You quit the game after ${totalMoves} moves.`);
    // Automatically return to the main menu after a brief delay
    setTimeout(showInstructions, 2000); 
}

// ------------------------------------
// 4. INITIALIZATION AND MENU LISTENERS
// ------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // Only attach listeners if the main elements exist
    if (instructionsScreen && gameScreen && settingsScreen) {
        
        // --- Instructions Screen & Game Start (Connects to initGame) ---
        // 'initGame' handles the screen switch and game setup when clicked
        document.getElementById('start-game-btn')?.addEventListener('click', initGame);

        // --- Settings Menu & Quit Buttons ---
        document.getElementById('settingsButton')?.addEventListener('click', showSettings);
        
        // --- Modal & Back Buttons (Crucial for smooth flow) ---
        document.getElementById('modal-play-again')?.addEventListener('click', () => {
            hideModal();
            initGame(); // Starts a new game immediately
        });

        document.getElementById('settings-back-btn')?.addEventListener('click', showInstructions);
        document.getElementById('quit-game-btn')?.addEventListener('click', quitGame);
    }
});
