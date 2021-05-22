const Card = require('../Card');

class DonTWakeTheDragon extends Card {
    constructor() {
        super();
        this.name = "Don't Wake the Dragon";
        this.image = 'wake-dragon.png';
        this.pastText = 'past placeholder';
        this.presentText = 'present placeholder';
        this.futureText = 'future placeholder';
    }
}

module.exports = DonTWakeTheDragon;