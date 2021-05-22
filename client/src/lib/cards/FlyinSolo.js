const Card = require('../Card');

class FlyinSolo extends Card {
    constructor() {
        super();
        this.name = "Flyin' Solo";
        this.image = 'flying-high.png';
        this.pastText = "Flyin' Solo 'past placeholder'";
        this.presentText = "Flyin' Solo 'present placeholder'";
        this.futureText = "Flyin' Solo 'future placeholder'";
    }
}

module.exports = FlyinSolo;