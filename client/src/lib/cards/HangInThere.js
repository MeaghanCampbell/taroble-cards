const Card = require('../Card');

class HangInThere extends Card {
    constructor() {
        super();
        this.name = "Hang in There";
        this.image = 'hang-in-there.png';
        this.pastText = 'past placeholder';
        this.presentText = 'present placeholder';
        this.futureText = 'future placeholder';
    }
}

module.exports = HangInThere;