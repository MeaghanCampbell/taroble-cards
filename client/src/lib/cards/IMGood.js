const Card = require('../Card');

class IMGood extends Card {
    constructor() {
        super();
        this.name = "I'm Good";
        this.image = 'im-good.png';
        this.pastText = 'past placeholder';
        this.presentText = 'present placeholder';
        this.futureText = 'future placeholder';
    }
}

module.exports = IMGood;