const Card = require('../Card');

class Roadkill extends Card {
    constructor() {
        super();
        this.name = "Roadkill";
        this.image = 'roadkill.png';
        this.pastText = 'past placeholder';
        this.presentText = 'present placeholder';
        this.futureText = 'future placeholder';
    }
}

module.exports = Roadkill;