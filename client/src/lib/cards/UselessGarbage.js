const Card = require('../Card');

class UselessGarbage extends Card {
    constructor() {
        super();
        this.name = "Useless Garbage";
        this.image = 'useless-garbage.png';
        this.pastText = "Oh, I'm sorry, you're saying this wasn't your mother's pet name for you?";
        this.presentText = "The way you make me feel.";
        this.futureText = " This prediction's end worth once you're past the point where you could've actually used its wisdom.";
    }
}

module.exports = UselessGarbage;