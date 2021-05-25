const Card = require('../Card');

class Megadeath extends Card {
    constructor() {
        super();
        this.name = "Megadeath";
        this.image = 'megadeath.png';
        this.pastText = "The ghosts of bullies past still haunt you. But what of your bullying haunting others? You never thought about that, you only think about yourself!";
        this.presentText = "You're going to drive that diesel straight into oblivion, aren't you?";
        this.futureText = "Stop whatever it is you're doing that is going to bring about your inevitable demise. Ha, why would I tell you what it is, where's the fun in that?";
    }
}

module.exports = Megadeath;