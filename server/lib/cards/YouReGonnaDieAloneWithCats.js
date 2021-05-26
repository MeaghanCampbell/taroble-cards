const Card = require('../Card');

class YouReGonnaDieAloneWithCats extends Card {
    constructor() {
        super();
        this.name = "You're Gonna Die Alone with Cats";
        this.image = 'die-alone-cats.png';
        this.pastText = "Collecting tiny animals was a worthwhile endeavour, too bad you forgot to feed them.";
        this.presentText = "No, of course a dozen cats isn't one too many, how else are you going to avoid getting dates?";
        this.futureText = "And they will know you by your furry outfits. Made out of authentic fur.";
    }
}

module.exports = YouReGonnaDieAloneWithCats;