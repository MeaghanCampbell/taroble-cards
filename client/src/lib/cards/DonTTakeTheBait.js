const Card = require('../Card');

class DonTTakeTheBait extends Card {
    constructor() {
        super();
        this.name = "Don't Take the Bait";
        this.image = 'dont-take-bait.png';
        this.pastText = "Childhood was difficult for all of us: learning who to trust, how far we could push the envelope. But man, were you a gullible little tool!";
        this.presentText = "Well, you're here, aren't you?";
        this.futureText = "We will meet here again, at a much later date, when the globes and orbs in the sky will speak of virtue and deliverance... Unless you cop out and ask for another reading, in which case you're on your own, bucko.";
    }
}

module.exports = DonTTakeTheBait;