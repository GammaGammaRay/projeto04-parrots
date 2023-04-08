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
<img class="card-front" src="img/c1_bobrossparrot.gif" alt="front">
</div>`;

function dealCards(cardCount) {
    for (let i = 0; i < cardCount; i++) {
        game.innerHTML += cardDiv;
    }
}

const card = document.querySelectorAll('.card');

function flipCard(el) {
    el.classList.toggle('flip');
  }

card.forEach(card => card.addEventListener('click', flipCard));