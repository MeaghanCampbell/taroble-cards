const Card = require('../Card');

class TheExtremeMakeover extends Card {
    constructor() {
        super();
        this.name = "The Extreme Makeover";
        this.image = 'extreme-makeover.png';
        this.pastText = 'They used to call you "ugly duckling". And for good reason, holy shit!';
        this.presentText = "You've been thinking about turning things around for a while. Time to do it, you lazy sod.";
        this.futureText = "Yes, I can promise you even the cops won't be able to tell.";
    }
}

module.exports = TheExtremeMakeover;