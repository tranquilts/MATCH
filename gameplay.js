<script>
const cards = document.querySelectorAll('.card');
let flippedCards = [];
let lockBoard = false;

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (lockBoard || card.classList.contains('flip') || card.classList.contains('matched')) return;
    card.classList.add('flip');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      lockBoard = true;
      const [card1, card2] = flippedCards;
      if (card1.dataset.name === card2.dataset.name) {
        // Match found
        card1.classList.add('matched');
        card2.classList.add('matched');
        flippedCards = [];
        lockBoard = false;
      } else {
        // No match — flip back after short delay
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
</script>
