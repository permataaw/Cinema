document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.card');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;
  
    function showCard(index) {
      cards.forEach(function(card) {
        card.style.transform = `translateX(-${index * 100}%)`;
      });
    }
  
    function goToPreviousCard() {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      showCard(currentIndex);
    }
  
    function goToNextCard() {
      currentIndex = (currentIndex + 1) % cards.length;
      showCard(currentIndex);
    }
  
    prevButton.addEventListener('click', goToPreviousCard);
    nextButton.addEventListener('click', goToNextCard);
  });
  