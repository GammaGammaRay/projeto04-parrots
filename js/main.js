function setCardCount() {
    let cardCount = prompt("Escolha um número par de cartas, entre 4 e 14:");
    
    setTimeout(function() {
        if(cardCount < 4 || cardCount > 14 || cardCount%2 != 0){
            // alert("Numero inválido");
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


const cardBack = "img/back.png"

// define card div
const cardDiv = `<div class="card" onclick="flipCard(this)">
<img class="card-back" src="img/back.png" alt="back">
<img class="card-front" src="${cardImg[Math.floor(Math.random() * cardImg.length)]}" alt="front">
</div>`;

function dealCards(cardCount) {
    const cardIndices = [];
    const availableCards = cardImg.slice();
    
    // Create an array with pairs of random card-back images
    const cardFronts = [];
    console.log("imageArr.len:" + cardImg.length)
    while (cardFronts.length < cardCount) {
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        const randomCard = availableCards[randomIndex];
    
        // If the selected card is undefined, skip it
        if (!randomCard) {
          continue;
        }
    
        cardFronts.push(randomCard);
        cardFronts.push(randomCard);
        availableCards.splice(randomIndex, 1);
      }

      for (let i = cardFronts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardFronts[i], cardFronts[j]] = [cardFronts[j], cardFronts[i]];
      }
    
    // Create the HTML for each card with a random card-back image
    for (let i = 0; i < cardCount; i++) {
      game.innerHTML += `<div class="card" onclick="flipCard(this)">
        <img class="card-back" src="${cardBack}" alt="back">
        <img class="card-front" src="${cardFronts[i]}" alt="front">
      </div>`;
    }

  }

const card = document.querySelectorAll('.card');

function flipCard(el) {
    if(document.querySelectorAll('.flip').length >= 2) {
        return;
    }

    el.classList.toggle('flip');
    let cardsFlippedCount = document.querySelectorAll('.flip').length;
    

    if(cardsFlippedCount === 2) {
        const flipped = document.querySelectorAll('.flip');
        const front1 = flipped[0].querySelector('.card-front').getAttribute('src');
        const front2 = flipped[1].querySelector('.card-front').getAttribute('src');

        if (front1 === front2) {
            flipped.forEach((element) => {
              element.classList.remove('flip');
              element.classList.add('matched');
            });
          } else {
            // Cards do not match
            setTimeout(() => {
              flipped.forEach((element) => {
                element.classList.remove('flip');
              });
            }, 1000);
          }
    }
  }

card.forEach(card => card.addEventListener('click', flipCard));