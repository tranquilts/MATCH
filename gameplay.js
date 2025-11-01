const cards = document.querySelectorAll('.card');
let flippedCards = [];
let lockBoard = false;
let moves = 0;
let pairs = 0;

const movesDisplay = document.getElementById('moves');
const pairsDisplay = document.getElementById('pairs');

// 🔀 Shuffle cards every time the game starts
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (lockBoard || card.classList.contains('flip') || card.classList.contains('matched')) return;
    card.classList.add('flip');
    flippedCards.push(card);

    if (flippedCards.length === 2) {

      // ➕ Increment move counter
      moves++;
      movesDisplay.textContent = moves;

      lockBoard = true;
      const [card1, card2] = flippedCards;
      if (card1.dataset.name === card2.dataset.name) {
        // ✅ Match found
        card1.classList.add('matched');
        card2.classList.add('matched');
        flippedCards = [];
        lockBoard = false;

        // 🔶 Trigger flash animation manually on both sides (optional enhancement)
        [card1, card2].forEach(card => {
          card.querySelector('.front').style.animation = 'flash 0.6s ease 2';
          card.querySelector('.back').style.animation = 'flash 0.6s ease 2';
          // Remove animation style after it finishes so it can replay next time
          setTimeout(() => {
            card.querySelector('.front').style.animation = '';
            card.querySelector('.back').style.animation = '';
          }, 1200);
        });

        // ➕ Increment pairs counter
        pairs++;
        pairsDisplay.textContent = pairs;
      
      } else {
        // ❌ No match — flip back after short delay
        setTimeout(() => {
          card1.classList.remove('flip');
          card2.classList.remove('flip');
          flippedCards = [];
          lockBoard = false;
        }, 1000);
      }
    }
  });
});

// ⚙️ Settings button click handler
const settingsButton = document.getElementById('settingsButton');
settingsButton.addEventListener('click', () => {
  window.location.href = 'settings_menu.html';
});