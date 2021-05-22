const Card = require('../Card');

class YouReGonnaDieAloneWithCats extends Card {
    constructor() {
        super();
        this.name = "You're Gonna Die Alone with Cats";
        this.image = 'die-alone-cats.png';
        this.pastText = 'past placeholder';
        this.presentText = 'present placeholder';
        this.futureText = 'future placeholder';
    }
}

module.exports = YouReGonnaDieAloneWithCats;