const Card = require('./Card')
const Cards = require('./cards/Cards')
const { Random } = require("random-js");
const random = new Random();

class Reading {
    constructor(
        past = new Card,
        present = new Card,
        future = new Card,
    ) {
        this.past = past;
        this.present = present;
        this.future = future;
    }

    generateReading() {
        const cards = new Cards;
        let deck = []
        
        for (const key in cards) {
            if (Object.hasOwnProperty.call(cards, key)) {
                const card = cards[key];
                deck.push(card)
            }
        }
        let pastCard = random.die(deck.length-1)
        let presentCard = random.die(deck.length-1)
        let futureCard = random.die(deck.length-1)
        
        while (pastCard === presentCard) {
            presentCard = random.die(deck.length-1)
        }
        
        while (futureCard === pastCard || futureCard === presentCard) {
            futureCard = random.die(deck.length-1)
        }

        this.past = deck[pastCard]
        this.present = deck[presentCard]
        this.future = deck[futureCard]

        return this
    }
};

export default Reading;