const Card = require('../Card');

class YouShallNotPass extends Card {
    constructor() {
        super();
        this.name = "You Shall Not Pass";
        this.image = 'link placeholder';
        this.pastText = 'past placeholder';
        this.presentText = 'present placeholder';
        this.futureText = 'future placeholder';
    }
}

module.exports = YouShallNotPass;