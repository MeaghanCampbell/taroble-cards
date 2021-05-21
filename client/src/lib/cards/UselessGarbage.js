const Card = require('../Card');

class UselessGarbage extends Card {
    constructor() {
        super();
        this.name = "Useless Garbage";
        this.image = 'link placeholder';
        this.pastText = 'past placeholder';
        this.presentText = 'present placeholder';
        this.futureText = 'future placeholder';
    }
}

module.exports = UselessGarbage;