const Card = require('../Card');

class IWokeUpLikeThis extends Card {
    constructor() {
        super();
        this.name = "I Woke Up Like This";
        this.image = 'woke-up-like-this.png';
        this.pastText = "I Woke Up Like This 'past placeholder'";
        this.presentText = "I Woke Up Like This 'present placeholder'";
        this.futureText = "I Woke Up Like This 'future placeholder'";
    }
}

module.exports = IWokeUpLikeThis;