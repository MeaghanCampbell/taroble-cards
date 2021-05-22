const Card = require('../Card');

class Charge extends Card {
    constructor() {
        super();
        this.name = "Charge!!!";
        this.image = 'charge.png';
        this.pastText = 'past placeholder';
        this.presentText = 'present placeholder';
        this.futureText = 'future placeholder';
    }
}

module.exports = Charge;