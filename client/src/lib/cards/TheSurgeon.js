const Card = require('../Card');

class TheSurgeon extends Card {
    constructor() {
        super();
        this.name = "The Surgeon";
        this.image = 'surgeon.png';
        this.pastText = "No, that operation really wasn't a success...";
        this.presentText = "An apple a day keeps the doctor away. But not by smoking it in your hookah.";
        this.futureText = "I see a tall, handsome stranger in a long, white coat. It's either a Eurovision contestant or the coroner. Only time will tell. Or, another reading.";
    }
}

module.exports = TheSurgeon;