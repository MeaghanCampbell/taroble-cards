const Card = require('../Card');

class Charge extends Card {
    constructor() {
        super();
        this.name = "Charge!!!";
        this.image = 'charge.png';
        this.pastText = "Your chosen moments for taking initiative really haven't been the best, historically.";
        this.presentText = "To hell with the consequences, legal or otherwise, just rip off the band-aid!";
        this.futureText = "You'll know when the time comes. You'll miss out on doing anything about it, but at least you'll know.";
    }
}

module.exports = Charge;