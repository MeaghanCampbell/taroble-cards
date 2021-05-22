const Card = require('../Card');

class FlyinSolo extends Card {
    constructor() {
        super();
        this.name = "Flyin' Solo'.png";
        this.image = 'flying-high.png';
        this.pastText = 'past placeholder';
        this.presentText = 'present placeholder';
        this.futureText = 'future placeholder';
    }
}

module.exports = FlyinSolo;