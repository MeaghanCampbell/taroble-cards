const Card = require('../Card');

class TheExtremeMakeover extends Card {
    constructor() {
        super();
        this.name = "The Extreme Makeover";
        this.image = 'extreme-makeover.png';
        this.pastText = 'past placeholder';
        this.presentText = 'present placeholder';
        this.futureText = 'future placeholder';
    }
}

module.exports = TheExtremeMakeover;