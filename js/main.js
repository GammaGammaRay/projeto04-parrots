function setCardCount() {
    let cardCount = prompt("Número par de cartas, de 4 a 14:");
    
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
const card = `<div class="card" onclick="flipCard()">
<img class="card-back" src="img/back.png" alt="back">
<img class="card-front" src="img/c1_bobrossparrot.gif" alt="front">
</div>`;

// const card = `<div class="card">
// <img class="card-back" src="img/back.png" alt="back">
// <img class="card-front" src="img/c1_bobrossparrot.gif" alt="front">
// </div>`;

function dealCards(cardCount) {
    for (let i = 0; i < cardCount; i++) {
        game.innerHTML += card;
    }
}

const cards = document.querySelectorAll('.card');

function flipCard() {
    this.classList.add('flip');
    console.log("flip");
  }

cards.forEach(card => card.addEventListener('click', flipCard));