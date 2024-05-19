let cards = []
let sum = 0
let message = ''
let is_alive = true
let is_blackjack = false
let chips = 100

let startButton = document.getElementById("start")
let textMessage = document.getElementById("text-message")
let sumElement = document.getElementById("sum-text")
let cardsElement = document.getElementById("cards-text")
let chipsElement = document.getElementById("chips")

chipsElement.textContent = "Chips: $" + chips

function random_card() {
    let random_num = Math.floor(Math.random() * 13) + 1
    if (random_num > 10) {
        return 10
    }
    else if (random_num === 1) {
        return 11
    }
    else {
        return random_num
    }
}

function start_game() {
    let firstCard = random_card()
    let secondCard = random_card()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    is_alive = true
    is_blackjack = false
    render_game()
}

function render_game() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "You have got the blackjack!"
        is_blackjack = true
        chips += 500
        chipsElement.textContent = "Chips: $" + chips
    }
    else {
        message = "Sorry! you are out of the game"
        is_alive = false
    }

    // console.log(message)
    textMessage.textContent = message

    cardsElement.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsElement.textContent += cards[i] + " "
    }

    sumElement.textContent = "Sum: " + sum
}

function new_card() {
    if (is_alive === true && is_blackjack === false) {
        let newcard = random_card()
        cards.push(newcard)
        sum += newcard
        render_game()
    }
}



