const Card = require('../Card');

class Megadeath extends Card {
    constructor() {
        super();
        this.name = "Megadeath";
        this.image = 'megadeath.png';
        this.pastText = 'past placeholder';
        this.presentText = 'present placeholder';
        this.futureText = 'future placeholder';
    }
}

module.exports = Megadeath;