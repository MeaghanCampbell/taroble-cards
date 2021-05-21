const Card = require('../Card');

class Charge extends Card {
    constructor() {
        super();
        this.name = "Charge!!!";
        this.image = 'link placeholder';
        this.pastText = 'past placeholder';
        this.presentText = 'present placeholder';
        this.futureText = 'future placeholder';
    }
}

module.exports = Charge;