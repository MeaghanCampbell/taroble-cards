const Card = require('../Card');

class YouShallNotPass extends Card {
    constructor() {
        super();
        this.name = "You Shall Not Pass";
        this.image = 'shall-not-pass.png';
        this.pastText = "Yeah, I remember my senior year, too...";
        this.presentText = "Seriously, you need to ask for a refund on that operation.";
        this.futureText = "A great tragedy will befall you unless you quickly ask for another reading...";
    }
}

module.exports = YouShallNotPass;