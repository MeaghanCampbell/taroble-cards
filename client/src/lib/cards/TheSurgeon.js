const Card = require('../Card');

class TheSurgeon extends Card {
    constructor() {
        super();
        this.name = "The Surgeon";
        this.image = 'link placeholder';
        this.pastText = 'past placeholder';
        this.presentText = 'present placeholder';
        this.futureText = 'future placeholder';
    }
}

module.exports = TheSurgeon;