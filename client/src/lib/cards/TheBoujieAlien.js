const Card = require('../Card');

class TheBoujieAlien extends Card {
    constructor() {
        super();
        this.name = "The Boujie Alien";
        this.image = 'boujie-alien.png';
        this.pastText = "A while ago, people would mistake you for some 18th Century French duke. Now, I'm not so sure.";
        this.presentText = "You feel like a fish out of water and always look down upon the rest, who cower in your magnificent, exotic presence. It's just BO.";
        this.futureText = "If a rich, ravishing stranger seems like they're abducting you, call the fucking police.";
    }
}

module.exports = TheBoujieAlien;