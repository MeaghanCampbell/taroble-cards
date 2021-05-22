const Card = require('../Card');

class YouShallNotPass extends Card {
    constructor() {
        super();
        this.name = "You Shall Not Pass";
        this.image = 'shall-not-pass.png';
        this.pastText = "You Shall Not Pass 'past placeholder'";
        this.presentText = "You Shall Not Pass 'present placeholder'";
        this.futureText = "You Shall Not Pass 'future placeholder'";
    }
}

module.exports = YouShallNotPass;