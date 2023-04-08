function setCardCount() {
    let cardCount = prompt("Escolha um número par de cartas, entre 4 e 14:");
    
    setTimeout(function() {
        if(cardCount < 4 || cardCount > 14 || cardCount%2 != 0){
            alert("Numero inválido");
            setCardCount();
        }
        else {
            dealCards(cardCount);
        }
    }
        
    )
    
}

const game = document.getElementById('game-container');

const cardImg = [
    "img/c1_bobrossparrot.gif",
    "img/c2_explodyparrot.gif",
    "img/c3_fiestaparrot.gif",
    "img/c4_metalparrot.gif",
    "img/c5_revertitparrot.gif",
    "img/c6_tripletsparrot.gif",
    "img/c7_unicornparrot.gif",
];

const cardDiv = `<div class="card" onclick="flipCard(this)">
<img class="card-back" src="img/back.png" alt="back">
<img class="card-front" src="${cardImg[Math.floor(Math.random() * cardImg.length)]}" alt="front">
</div>`;

function dealCards(cardCount) {
    const cardIndices = [];
  
    // Create an array with pairs of random card-back images
    const cardBacks = [];
    for (let i = 0; i < cardCount/2; i++) {
      const randomIndex = Math.floor(Math.random() * cardImg.length);
      cardBacks.push(cardImg[randomIndex]);
      cardBacks.push(cardImg[randomIndex]);
    }
  
    // Shuffle the card-back images
    for (let i = cardBacks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardBacks[i], cardBacks[j]] = [cardBacks[j], cardBacks[i]];
    }
  
    // Create the HTML for each card with a random card-back image
    for (let i = 0; i < cardCount; i++) {
      game.innerHTML += `<div class="card" onclick="flipCard(this)">
        <img class="card-back" src="img/back.png" alt="back">
        <img class="card-front" src="${cardImg[i % cardImg.length]}" alt="front">
      </div>`;
    }
  }

const card = document.querySelectorAll('.card');

function flipCard(el) {
    el.classList.toggle('flip');
  }

card.forEach(card => card.addEventListener('click', flipCard));