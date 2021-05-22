const Card = require('../Card');

class IWokeUpLikeThis extends Card {
    constructor() {
        super();
        this.name = "I Woke Up Like This";
        this.image = 'woke-up-like-this.png';
        this.pastText = 'past placeholder';
        this.presentText = 'present placeholder';
        this.futureText = 'future placeholder';
    }
}

module.exports = IWokeUpLikeThis;