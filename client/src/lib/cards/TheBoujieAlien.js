const Card = require('../Card');

class TheBoujieAlien extends Card {
    constructor() {
        super();
        this.name = "The Boujie Alien";
        this.image = 'boujie-alien.png';
        this.pastText = 'past placeholder';
        this.presentText = 'present placeholder';
        this.futureText = 'future placeholder';
    }
}

module.exports = TheBoujieAlien;