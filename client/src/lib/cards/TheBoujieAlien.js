const Card = require('../Card');

class TheBoujieAlien extends Card {
    constructor() {
        super();
        this.name = "The Boujie Alien";
        this.image = 'boujie-alien.png';
        this.pastText = "The Boujie Alien 'past placeholder'";
        this.presentText = "The Boujie Alien 'present placeholder'";
        this.futureText = "The Boujie Alien 'future placeholder'";
    }
}

module.exports = TheBoujieAlien;