const Card = require('../Card');

class UselessGarbage extends Card {
    constructor() {
        super();
        this.name = "Useless Garbage";
        this.image = 'useless-garbage.png';
        this.pastText = "Useless Garbage 'past placeholder'";
        this.presentText = "Useless Garbage 'present placeholder'";
        this.futureText = "Useless Garbage 'future placeholder'";
    }
}

module.exports = UselessGarbage;