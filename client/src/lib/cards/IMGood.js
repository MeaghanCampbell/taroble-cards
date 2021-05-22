const Card = require('../Card');

class IMGood extends Card {
    constructor() {
        super();
        this.name = "I'm Good";
        this.image = 'im-good.png';
        this.pastText = "I'm Good 'past placeholder'";
        this.presentText = "I'm Good 'present placeholder'";
        this.futureText = "I'm Good 'future placeholder'";
    }
}

module.exports = IMGood;