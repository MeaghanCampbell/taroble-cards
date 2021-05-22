const Card = require('../Card');

class DonTWakeTheDragon extends Card {
    constructor() {
        super();
        this.name = "Don't Wake the Dragon";
        this.image = 'wake-dragon.png';
        this.pastText = "Don't Wake the Dragon 'past placeholder'";
        this.presentText = "Don't Wake the Dragon 'present placeholder'";
        this.futureText = "Don't Wake the Dragon 'future placeholder'";
    }
}

module.exports = DonTWakeTheDragon;