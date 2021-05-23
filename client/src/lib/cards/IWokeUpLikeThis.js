const Card = require('../Card');

class IWokeUpLikeThis extends Card {
    constructor() {
        super();
        this.name = "I Woke Up Like This";
        this.image = 'woke-up-like-this.png';
        this.pastText = "Oh, no, it's definitely not you, it's the way the stars have always aligned to make an asshole in the AM";
        this.presentText = "That innate thing you think makes you so unique? It's called morning breath. Deal with it.";
        this.futureText = "One day you'll wake up all alone and think, how did this come to pass? If only I'd visited a medium and asked them about it before...";
    }
}

module.exports = IWokeUpLikeThis;