
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let player = 50

function plusScore() {
    player += 50
    plusContent = "Your money: ₱ " + player
    playerEl.innerHTML = plusContent
}

function minusScore() {
    player -= 5
    minusContent = "Your money: ₱ " + player
    playerEl.innerHTML = minusContent
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
if (sum <= 20) {
    message = "Do you want to draw a new card? 😀"
    isAlive = true
} else if (sum === 21) {
    message = "Congratulations! 🥳"
    hasBlackJack = true
    plusScore()

} else {
    message = "Sorry, you lose. 😭"
    isAlive = false
    minusScore()
}
messageEl.textContent = message
}

function newCard() {
    if (isAlive === true) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
