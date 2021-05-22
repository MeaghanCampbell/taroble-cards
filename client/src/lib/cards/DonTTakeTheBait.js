const Card = require('../Card');

class DonTTakeTheBait extends Card {
    constructor() {
        super();
        this.name = "Don't Take the Bait";
        this.image = 'dont-take-bait.png';
        this.pastText = "Don't Take the Bait 'past placeholder'";
        this.presentText = "Don't Take the Bait 'present placeholder'";
        this.futureText = "Don't Take the Bait 'future placeholder'";
    }
}

module.exports = DonTTakeTheBait;