const Card = require('../Card');

class Roadkill extends Card {
    constructor() {
        super();
        this.name = "Roadkill";
        this.image = 'roadkill.png';
        this.pastText = "Bambi's mom wasn't happy when you ran her son over, so she put a curse on you. Bet you don't feel that flat tire was as random now, huh?";
        this.presentText = "Our focus determines our existence, and boy, do YOU feel like crap today!";
        this.futureText = "You need to stop pushing yourself as hard, lest you wind up like this little guy.";
    }
}

module.exports = Roadkill;