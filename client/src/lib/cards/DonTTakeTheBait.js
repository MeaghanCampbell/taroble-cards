const Card = require('../Card');

class DonTTakeTheBait extends Card {
    constructor() {
        super();
        this.name = "Don't Take the Bait";
        this.image = 'dont-take-bait.png';
        this.pastText = 'past placeholder';
        this.presentText = 'present placeholder';
        this.futureText = 'future placeholder';
    }
}

module.exports = DonTTakeTheBait;