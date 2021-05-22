const Card = require('../Card');

class IMGood extends Card {
    constructor() {
        super();
        this.name = "I'm Good";
        this.image = 'im-good.png';
        this.pastText = "With that amount of baggage, it's a wonder you can still lug your own ass around...";
        this.presentText = "It's ok to appear vulnerable once in a while. But never if you're a child, facing a pitbull.";
        this.futureText = "Don't try looking so tough as to never ask for aid. One look into your future and I felt like shrieking on the inside. Trust me: seek. help..";
    }
}

module.exports = IMGood;